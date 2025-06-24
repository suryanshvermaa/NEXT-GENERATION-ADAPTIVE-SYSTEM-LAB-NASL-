import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 * @description creating publication
 * @route POST /api/publication/create
 * @access Private
 * @param req
 * @param res
 */
export const createPublication = asyncHandler(
	async (req: Request, res: Response) => {
		const { title, authors, content, type } = req.body;
		if (!title || !authors || !content || !type) {
			throw new AppError("Please provide all required fields!", 400);
		}
		const publication = await prisma.publication.create({
			data: {
				title,
				authors: {
					connect: authors.map((authorId: number) => ({
						id: authorId,
					})),
				},
				type,
				content,
			},
			include: {
				authors: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					},
				},
			},
		});
		if (publication.authors) {
			for (let author of publication.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage, 3)
					: "";
			}
		}
		response(res, 201, "Publication created successfully", { publication });
	}
);

/**
 * @description updating a publication by ID
 * @route PUT /api/publication/:id
 * @access Private
 * @param req
 * @param res
 */
export const updatePublication = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const { title, authors } = req.body;
		if (!id || !title || !authors) {
			throw new AppError("Please provide all required fields!", 400);
		}
		const publication = await prisma.publication.update({
			where: { id: Number(id) },
			data: {
				title,
				authors: {
					set: [],
					connect: authors.map((authorId: number) => ({
						id: authorId,
					})),
				},
			},
			include: {
				authors: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					},
				},
			},
		});
		if (publication.authors) {
			for (let author of publication.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage, 3)
					: "";
			}
		}
		response(res, 200, "Project updated successfully", { publication });
	}
);

/**
 * @description fetching all publication
 * @route GET /api/publication/get-all?type=type
 * @access Public
 * @param req
 * @param res
 */
export const getPublications = asyncHandler(
	async (req: Request, res: Response) => {
		const type = req.query.type;
		const publications = await prisma.publication.findMany({
			where: {
				type: type as string,
			},
			orderBy: { createdAt: "desc" },
			include: {
				authors: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					},
				},
			},
		});
		for (let publication of publications) {
			for (let author of publication.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage, 3)
					: "";
			}
		}
		response(res, 200, "Projects fetched successfully", { publications });
	}
);

/**
 * @description fetching a single project by ID
 * @route GET /api/publication/:id
 * @access Public
 * @param req
 * @param res
 */
export const getPublicationById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of project", 400);
		const publication = await prisma.publication.findUnique({
			where: { id: Number(id) },
			include: {
				authors: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					},
				},
			},
		});
		for (let author of publication?.authors!) {
			author.profileImage = author.profileImage
				? await signedUrl(author.profileImage, 3)
				: "";
		}
		response(res, 200, "Project fetched successfully", { publication });
	}
);

/**
 * @description deleting a publication by ID
 * @route DELETE /api/publication/:id
 * @access Private
 * @param req
 * @param res
 */
export const deletePublication = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of project", 400);
		const publication = await prisma.publication.delete({
			where: { id: Number(id) },
		});
		response(res, 200, "Project deleted successfully", { publication });
	}
);

/**
 * @description fetching all publication by author ID
 * @route GET /api/publication/get-all-by-authorId/:authorid/:type
 * @access Private
 * @param req
 * @param res
 */
export const getAllPublicationsByAuthorId = asyncHandler(
	async (req: Request, res: Response) => {
		const { authorid, type } = req.params;
		if (!authorid) throw new AppError("Please provide piId", 400);
		const publications = await prisma.publication.findMany({
			where: {
				authors: {
					some: {
						id: Number(authorid),
					},
				},
				type: type,
			},
			orderBy: { createdAt: "desc" },
			include: {
				authors: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					},
				},
			},
		});
		for (let publication of publications) {
			for (let author of publication.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage!, 3)
					: "";
			}
		}
		response(res, 200, "Projects fetched successfully", { publications });
	}
);
