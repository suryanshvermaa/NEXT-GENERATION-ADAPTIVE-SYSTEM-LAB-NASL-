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
				authors: authors.split(",").map((author: string) => (author.trim())),
				publicationDate: new Date(publicationDate),
				volume,
				year,
				quartile,
				doi,
				createdBy: req.user!.userId as number,
			},
		});
		await prisma.user.update({
			where: { id: req.user!.userId as number },
			data: {
				journals_count: { increment: 1 }
			}
		})
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
			publicationDate,
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
		const existingPaper = await prisma.journal_Paper.findUnique({
			where: {
				id: Number(id),
			},
		});
		if (!existingPaper) {
			throw new AppError("Journal paper not found", 404);
		}
		if (req.user?.role !== "ADMIN" && existingPaper.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to update this journal paper", 403);
		}
		const journalPaper = await prisma.journal_Paper.update({
			where: {
				id: Number(id),
			},
			data: {
				title,
				journal,
				authors: authors.split(",").map((author: string) => (author.trim())),
				publicationDate: publicationDate ? new Date(publicationDate) : existingPaper.publicationDate,
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
 * @route GET /api/journal-paper/get-all?page=&limit=
 * @access Public
 * @param req
 * @param res
 */
export const getAllJournalPaper = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = "1", limit = "10" } = req.query;
		const pageNumber = parseInt(page as string, 10);
		const limitNumber = parseInt(limit as string, 10);
		const skip = (pageNumber - 1) * limitNumber;
		const journalPapers = await prisma.journal_Paper.findMany({
			orderBy: {
				createdAt: "desc",
			},
			skip: skip,
			take: limitNumber,
		});
		response(res, 200, "Journal papers fetched successfully", {
			journalPapers,
		});
	}
);

/**
 *
 * @description fetching journal papers by user id
 * @route GET /api/journal-paper/get-all-by-user-id?page=&limit=
 * @access Private
 * @param req
 * @param res
 */
export const getJounalPapersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.params.userId || req.user?.userId;
		const { page = "1", limit = "10" } = req.query;
		const pageNumber = parseInt(page as string, 10);
		const limitNumber = parseInt(limit as string, 10);
		const skip = (pageNumber - 1) * limitNumber;
		const journalPapers = await prisma.journal_Paper.findMany({
			where: {
				createdBy: Number(userId),
			},
			orderBy: {
				createdAt: "desc",
			},
			skip: skip,
			take: limitNumber
		});
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
			}
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
		const existingPaper = await prisma.journal_Paper.findUnique({
			where: {
				id: Number(id),
			},
		});
		if (!existingPaper) {
			throw new AppError("Journal paper not found", 404);
		}
		if (req.user?.role !== "ADMIN" && existingPaper.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to delete this journal paper", 403);
		}
		const journalPaper = await prisma.journal_Paper.delete({
			where: {
				id: Number(id),
			},
		});
		await prisma.user.update({
			where: { id: req.user!.userId as number },
			data: {
				journals_count: { decrement: 1 }
			}
		})
		response(res, 200, "Journal paper deleted successfully", {
			journalPaper,
		});
	}
);
