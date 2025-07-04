import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 *
 * @description creating journal paper
 * @route POST /api/journal-paper/create
 * @access Private
 * @param req
 * @param res
 */
export const createJournalPaper = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			title,
			journal,
			authors,
			publicationDate = new Date(),
			volume = null,
			year = null,
			quartile = null,
			doi = null,
		} = req.body;
		if (!title || !journal || !authors)
			throw new AppError(
				"Please provide all required fields: title, journal, authors, publicationDate, volume, year, quartile, doi",
				400
			);
		const journalPaper = await prisma.journal_Paper.create({
			data: {
				title,
				journal,
				authors: {
					connect: authors.map((authorId: number) => ({
						id: authorId,
					})),
				},
				publicationDate: new Date(publicationDate),
				volume,
				year,
				quartile,
				doi,
			},
		});
		response(res, 201, "Journal paper created successfully", {
			journalPaper,
		});
	}
);

/**
 *
 * @description updating journal paper
 * @route POST /api/journal-paper/update
 * @access Private
 * @param req
 * @param res
 */
export const updateJournalPaper = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			id,
			title,
			journal,
			authors,
			publicationDate = new Date(),
			volume = null,
			year = null,
			quartile = null,
			doi = null,
		} = req.body;
		if (!id || !title || !journal || !authors)
			throw new AppError(
				"Please provide all required fields: id, title, journal, authors, publicationDate, volume, year, quartile, doi",
				400
			);
		const journalPaper = await prisma.journal_Paper.update({
			where: {
				id: id as number,
			},
			data: {
				title,
				journal,
				authors: {
					connect: authors.map((authorId: number) => ({
						id: authorId,
					})),
				},
				publicationDate: new Date(publicationDate),
				volume,
				year,
				quartile,
				doi,
			},
		});
		response(res, 200, "Journal paper updated successfully", {
			journalPaper,
		});
	}
);

/**
 *
 * @description fetching all journal papers
 * @route GET /api/journal-paper/get-all
 * @access Public
 * @param req
 * @param res
 */
export const getAllJournalPaper = asyncHandler(
	async (req: Request, res: Response) => {
		const journalPapers = await prisma.journal_Paper.findMany({
			orderBy: {
				createdAt: "desc",
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
		for (let paper of journalPapers) {
			for (let author of paper.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage!, 3)
					: "";
			}
		}
		if (!journalPapers || journalPapers.length === 0)
			throw new AppError("No journal papers found", 404);
		response(res, 200, "Journal papers fetched successfully", {
			journalPapers,
		});
	}
);

/**
 *
 * @description fetching journal papers by user id
 * @route GET /api/journal-paper/get-all-by-user-id
 * @access Private
 * @param req
 * @param res
 */
export const getJounalPapersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.user?.userId;
		const journalPapers = await prisma.journal_Paper.findMany({
			where: {
				authors: {
					some: {
						id: userId as number,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
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
		if (!journalPapers || journalPapers.length === 0)
			throw new AppError("No journal papers found for this user", 404);
		response(res, 200, "Journal papers fetched successfully", {
			journalPapers,
		});
	}
);

/**
 *
 * @description fetching journal paper by id
 * @route GET /api/journal-paper/:id
 * @access Private
 * @param req
 * @param res
 */
export const getJournalPaperById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id) throw new AppError("Please provide id of journal paper", 400);
		const journalPaper = await prisma.journal_Paper.findUnique({
			where: {
				id: Number(id),
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
		if (!journalPaper) throw new AppError("Journal paper not found", 404);
		response(res, 200, "Journal paper fetched successfully", {
			journalPaper,
		});
	}
);

/**
 *
 * @description deleting journal paper by id
 * @route DELETE /api/journal-paper/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteJournalPaperById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of journal paper", 400);
		const journalPaper = await prisma.journal_Paper.delete({
			where: {
				id: Number(id),
			},
		});
		response(res, 200, "Journal paper deleted successfully", {
			journalPaper,
		});
	}
);
