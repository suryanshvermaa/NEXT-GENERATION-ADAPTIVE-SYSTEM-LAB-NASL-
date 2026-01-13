import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import response from "../utils/response";
import { AppError } from "../utils/error";
import prisma from "../config/db";
import bcrypt from "bcryptjs";
import { createToken } from "../middlewares/auth.middleware";
import { signedUrl } from "../s3";
import { getUserInfo } from "../auth/googleAuth";
import { sendMailToCreatedUser } from "../mail/sendMail";

enum Role {
	USER,
	ADMIN,
}

/**
 * @description Create a new user
 * @route POST /api/user/createUser
 * @access Private
 * @param req
 * @param res
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
	const {
		name,
		email,
		profileImage = "",
		password = "",
		designation,
	} = req.body;
	let { role = Role.USER } = req.body;
	if (role == "admin") role = Role.ADMIN;
	if (!name || !email || !designation)
		throw new AppError("All fields are required", 400);
	const isExisting = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (isExisting) throw new AppError("email already in use", 400);
	let pass = "";
	if (password) pass = await bcrypt.hash(password, 10);
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: pass,
			profileImage,
			role,
			designation: designation,
		},
	});
	await sendMailToCreatedUser(user.email,pass);
	return response(res, 201, `${name} is ceated successfully`, {
		user: {
			name: user.name,
			email: user.email,
			role: user.role,
		},
	});
});

/**
 * @description login a user
 * @route POST /api/user/login
 * @access Public
 * @param req
 * @param res
 */
export const login = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password)
		throw new AppError("email and password both required", 400);
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (!user) throw new AppError("User not found", 400);
	if (user.password == "")
		throw new AppError("You have only google login access", 400);
	const isCorrectPassword = await bcrypt.compare(password, user.password!);
	if (!isCorrectPassword) throw new AppError("Password is incorrect", 401);
	const token = await createToken(
		{ userId: user.id, role: user.role },
		60 * 24
	); //for 24 hours
	response(res, 200, "login successful", {
		token,
		user: {
			...user,
			profileImage: user.profileImage
				? await signedUrl(user.profileImage, 4)
				: "",
			password: "Not visible for security",
		},
	});
});

/**
 * @description Create a new user
 * @route GET /api/user/profile
 * @access Private
 * @param req
 * @param res
 */
export const profile = asyncHandler(async (req: Request, res: Response) => {
	const userId = req.user?.userId;
	if (!userId) throw new AppError("userid not found", 401);
	const user = await prisma.user.findUnique({
		where: {
			id: userId as number,
		},
		select: {
			name: true,
			email: true,
			profileImage: true,
			about: true,
			designation: true,
			social: true,
			status: true,
			contactNumber: true,
			books: true,
			role: true,
		},
	});
	const userCountData = await prisma.user.findUnique({
		where: {
			id: userId as number,
		},
		include: {
			_count: {
				select: {
					books: true,
					bookChapters: true,
					conferencePapers: true,
					journals: true,
					patents: true,
					projects: true,
				},
			},
		},
	});
	response(res, 200, "profile fetched successfully", {
		user: {
			...user,
			...userCountData,
			profileImage: user?.profileImage
				? await signedUrl(user.profileImage, 4)
				: "",
			password: "Not visible for security",
		},
	});
});

export const loginWithGoogle = asyncHandler(
	async (req: Request, res: Response) => {
		const { code } = req.body;
		if (!code) throw new AppError("Please provide code", 400);
		const { email } = await getUserInfo(code);
		if (!email) throw new AppError("Unathorised", 401);
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) throw new AppError("Unauthorised", 401);
		const token = await createToken(
			{ userId: user.id, role: user.role },
			60 * 24
		); // for 24 hour
		response(res, 200, "login successful", {
			token,
			user: {
				...user,
				profileImage: user.profileImage
					? await signedUrl(user.profileImage, 4)
					: "",
				password: "Google login not have password",
			},
		});
	}
);

/**
 *
 * @description updating profile
 * @route POST /api/image/updateProfile
 * @access Private
 * @param req
 * @param res
 */
export const updateProfile = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			name,
			profileImage,
			contactNumber,
			linkedin,
			twitter,
			google,
			about,
		} = req.body;
		const social = [
			{
				id: 1,
				social: "linkedin",
				url: linkedin,
			},
			{
				id: 2,
				social: "twitter",
				url: twitter,
			},
			{
				id: 3,
				social: "google",
				url: google,
			},
		];
		const updatedUser = await prisma.user.update({
			where: {
				id: req.user?.userId as number,
			},
			data: {
				name,
				profileImage,
				contactNumber: String(contactNumber),
				social,
				about,
			},
		});
		response(res, 200, "Profile updated successfully", {
			user: {
				...updatedUser,
				password: "NOT VISIBLE FOR SECURITY",
				profileImage: updatedUser.profileImage
					? await signedUrl(updatedUser.profileImage, 4)
					: "",
			},
		});
	}
);

/**
 *
 * @description searching user
 * @route GET /api/user/search/?query="search term"
 * @access Private
 * @param req
 * @param res
 */
export const searchingUserByEmail = asyncHandler(
	async (req: Request, res: Response) => {
		const { query } = req.query;
		if (!query)
			throw new AppError("Please provide a valid search term", 400);
		const users = await prisma.user.findMany({
			where: {
				email: {
					mode: "insensitive",
					contains: query as string,
				},
			},
			select: {
				id: true,
				name: true,
				email: true,
				profileImage: true,
			},
			take: 5,
		});
		if (users.length === 0) {
			return response(res, 404, "No users found", { users: [] });
		}
		for (const user of users) {
			user.profileImage = user.profileImage
				? await signedUrl(user.profileImage!, 4)
				: "";
		}
		response(res, 200, "Users found successfully", { users });
	}
);

/**
 * @description Get people by designation
 * @route GET /api/user/getPeople?designation=designation
 * @access Public
 * @param req
 * @param res
 */
export const getPeople = asyncHandler(async (req: Request, res: Response) => {
	const { designation } = req.query;
	if (!designation) throw new AppError("Please provide designation", 400);
	const people = await prisma.user.findMany({
		where: {
			designation: designation as string,
		},
		select: {
			id: true,
			name: true,
			email: true,
			profileImage: true,
			designation: true,
			about: true,
			role: true,
		},
	});
	if (people.length === 0) {
		return response(res, 200, "No people found", { people: [] });
	}
	for (const person of people) {
		person.profileImage = person.profileImage
			? await signedUrl(person.profileImage!, 4)
			: "";
	}
	response(res, 200, "People found successfully", { people });
});
/**
 * @description Get profile by userId
 * @route GET /api/user/profile/:userId
 * @access Public
 * @param req
 */
export const getProfileById = asyncHandler(
	async (req: Request, res: Response) => {
		const { userId } = req.params;
		if (!userId) throw new AppError("Please provide userId", 400);
		const user = await prisma.user.findUnique({
			where: {
				id: parseInt(userId),
			},
			select: {
				name: true,
				email: true,
				profileImage: true,
				about: true,
				designation: true,
				social: true,
				status: true,
				contactNumber: true,
				role: true,
				publications: {
					select: {
						id: true,
						title: true,
						type: true,
					},
				},
			},
		});
		if (!user) throw new AppError("User not found", 404);
		user.profileImage = user.profileImage
			? await signedUrl(user.profileImage, 4)
			: "";
		response(res, 200, "Profile fetched successfully", { user });
	}
);
