import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import response from "../utils/response";
import { AppError } from "../utils/error";
import prisma from "../config/db";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { createToken } from "../middlewares/auth.middleware";
import { signedUrl } from "../s3";
import { getUserInfo } from "../auth/googleAuth";
import { sendMailToCreatedUser } from "../mail/sendMail";
import { Prisma, User } from "../../generated/prisma";

const designationToEnum = (designation: string): User["designation"] | null => {
  switch (designation.toLowerCase()) {
	case "btech":
		return "BTECH";
	case "mtech":
		return "MTECH";
	case "phd":
		return "PHD";
	case "investigator":
		return "INVESTIGATOR";
	case "intern":
		return "INTERN";
	case "alumni":
		return "ALUMNI";
	default:
		return null;
  }
};

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
	const designationEnum = designationToEnum(designation);
	if (!designationEnum) throw new AppError("Invalid designation provided", 400);
	const role = designationEnum;
	if (!name || !email || !designation)
		throw new AppError("All fields are required", 400);
	const isExisting = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (isExisting) throw new AppError("email already in use", 400);
	// Never email/store raw passwords; store hash and email a temporary password.
	const plainPassword = password || crypto.randomBytes(9).toString("base64url");
	const pass = await bcrypt.hash(plainPassword, 10);
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: pass,
			profileImage,
			role: role as User["role"],
			designation: designationEnum,
		},
	});
	try {
		await sendMailToCreatedUser(user.email, plainPassword);
	} catch (err) {
		// Make the failure visible to the frontend instead of a generic ECONNREFUSED.
		const message = err instanceof Error ? err.message : "Failed to send account email";
		throw new AppError(message, 502);
	}
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
 * @description getting profile of User
 * @route GET /api/user/profile/:userId
 * @access Public
 * @param req
 * @param res
 */
export const profile = asyncHandler(async (req: Request, res: Response) => {
	const userId = req.params.userId;
	
	if (!userId) {
		throw new AppError("userId parameter is required", 400);
	}
	
	const userIdNum = Number(userId);
	
	// Validate that userId is a valid number
	if (isNaN(userIdNum)) {
		throw new AppError("Invalid user id", 400);
	}
	
	const user = await prisma.user.findUnique({
		where: {
			id: userIdNum,
		},
		select: {
			id: true,
			name: true,
			email: true,
			profileImage: true,
			about: true,
			designation: true,
			contactNumber: true,
			books_count: true,
			conferencePapers_count: true,
			journals_count: true,
			patents_count: true,
			role: true,
			Social: {
				select: {
					platform: true,
					iconURL: true,
					url: true,
					id: true,
				}
			},
		},
	});
	if (!user) throw new AppError("User not found", 404);
	
	response(res, 200, "profile fetched successfully", {
		user: {
			...user,
			profileImage: user?.profileImage
				? await signedUrl(user.profileImage, 4)
				: "",
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

interface ISocial {
	platform: string;
	url: string;
	icon: string;
}

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
			email,
			profileImage,
			contactNumber,
			about
		} = req.body;
		const socials: ISocial[] = req.body.social ?? [];
		const socialsArray: Prisma.SocialCreateManyUserInput[] = socials.map((social) => {
			return {
				platform: social.platform,
				url: social.url,
				iconURL: social.icon ?? null,
			};
		});
		const updatedUser = await prisma.user.update({
			where: {
				id: req.user!.userId as number,
			},
			data: {
				name,
				email,
				profileImage,
				contactNumber: String(contactNumber),
				// only add new socials after deleting old ones
				Social: {
					deleteMany: {},
					createMany: {
						data: socialsArray,
					},
				},
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
 * @route GET /api/user/getPeople?designation=designation&page=1&limit=10
 * @access Public
 * @param req
 * @param res
 */
export const getPeopleByDesignation = asyncHandler(async (req: Request, res: Response) => {
	const { designation, page, limit } = req.query;
	if (!designation) throw new AppError("Please provide designation", 400);
	const designationEnum = designationToEnum(designation as string);
	if (designationEnum === null)
		throw new AppError("Please provide valid designation", 400);
	const pageNumber = parseInt(page as string) || 1;
	const limitNumber = parseInt(limit as string) || 10;
	const skip = (pageNumber - 1) * limitNumber;
	const people = await prisma.user.findMany({
		where: {
			designation: designationEnum,
		},
		select: {
			id: true,
			name: true,
			email: true,
			profileImage: true,
			designation: true,
			about: true,
		},
		skip,
		take: limitNumber,
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