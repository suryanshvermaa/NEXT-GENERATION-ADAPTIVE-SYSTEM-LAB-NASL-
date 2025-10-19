import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 *
 * @description creating conference paper
 * @route POST /api/conference-paper/create
 * @access Private
 * @param req
 * @param res
 */
export const createConferencePaper = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			title,
			authors,
			conference,
			location = null,
			year = null,
			pages = null,
			indexing = null,
			doi = null,
		} = req.body;
		if (
			!title ||
			!authors ||
			!conference ||
			!location ||
			!year ||
			!pages ||
			!indexing ||
			!doi
		)
			throw new AppError(
				"Please provide all required fields: title, authors, conference, location, year, pages, indexing, doi",
				400
			);
		const conferencePaper = await prisma.conference_Paper.create({
			data: {
				title,
				conference,
				location,
				year,
				pages,
				indexing,
				doi,
				authors: {
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
		response(res, 201, "Conference paper created successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description updating conference paper
 * @route POST /api/conference-paper/update
 * @access Private
 * @param req
 * @param res
 */
export const updateConferencePaper = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			id,
			title,
			authors,
			conference,
			location = null,
			year = null,
			pages = null,
			indexing = null,
			doi = null,
		} = req.body;
		if (
			!id ||
			!title ||
			!authors ||
			!conference ||
			!location ||
			!year ||
			!pages ||
			!indexing ||
			!doi
		)
			throw new AppError(
				"Please provide all required fields: id, title, authors, conference, location, year, pages, indexing, doi",
				400
			);
		const conferencePaper = await prisma.conference_Paper.update({
			where: { id: id as number },
			data: {
				title,
				conference,
				location,
				year,
				pages,
				indexing,
				doi,
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
		response(res, 200, "Conference paper updated successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description fetching all conference papers
 * @route GET /api/conference-paper/get-all
 * @access Public
 * @param req
 * @param res
 */
export const getAllConferencePapers = asyncHandler(
	async (req: Request, res: Response) => {
		const conferencePapers = await prisma.conference_Paper.findMany({
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
		if (!conferencePapers || conferencePapers.length === 0)
			throw new AppError("No conference papers found", 404);
		for (const conferencePaper of conferencePapers) {
			if (conferencePaper.authors) {
				for (const author of conferencePaper.authors) {
					author.profileImage = author.profileImage
						? await signedUrl(author.profileImage, 3)
						: "";
				}
			}
		}
		response(res, 200, "Conference papers fetched successfully", {
			conferencePapers,
		});
	}
);

/**
 *
 * @description fetching all conference papers by user ID
 * @route GET /api/conference-paper/get-all-by-user-id
 * @access Private
 * @param req
 * @param res
 */
export const getAllConferencePapersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.user?.userId;
		const conferencePapers = await prisma.conference_Paper.findMany({
			where: {
				authors: {
					some: {
						id: userId as number,
					},
				},
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
		if (!conferencePapers || conferencePapers.length === 0)
			throw new AppError("No conference papers found for this user", 404);
		for (const conferencePaper of conferencePapers) {
			if (conferencePaper.authors) {
				for (const author of conferencePaper.authors) {
					author.profileImage = author.profileImage
						? await signedUrl(author.profileImage, 3)
						: "";
				}
			}
		}
		response(res, 200, "Conference papers fetched successfully", {
			conferencePapers,
		});
	}
);

/**
 *
 * @description fetching a single conference paper by ID
 * @route GET /api/conference-paper/:id
 * @access Private
 * @param req
 * @param res
 */
export const getConferencePaperById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id)
			throw new AppError("Please provide id of conference paper", 400);
		const conferencePaper = await prisma.conference_Paper.findUnique({
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
		if (!conferencePaper)
			throw new AppError("Conference paper not found", 404);
		if (conferencePaper.authors) {
			for (const author of conferencePaper.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage, 3)
					: "";
			}
		}
		response(res, 200, "Conference paper fetched successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description deleting conference paper by id
 * @route DELETE /api/conference-paper/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteConferencePaperById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id)
			throw new AppError("Please provide id of conference paper", 400);
		const conferencePaper = await prisma.conference_Paper.delete({
			where: { id: Number(id) },
		});
		response(res, 200, "Conference paper deleted successfully", {
			conferencePaper,
		});
	}
);
