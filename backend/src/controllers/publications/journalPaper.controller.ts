import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";

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
			publicationDate,
			volume,
			year,
			quartile,
			doi,
		} = req.body;
		if (
			!title ||
			!journal ||
			!authors ||
			!publicationDate ||
			!volume ||
			!year ||
			!quartile ||
			!doi
		)
			throw new AppError(
				"Please provide all required fields: title, journal, authors, publicationDate, volume, year, quartile, doi",
				400
			);
		const journalPaper = await prisma.journal_Paper.create({
			data: {
				title,
				journal,
				authors,
				publicationDate,
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
			publicationDate,
			volume,
			year,
			quartile,
			doi,
		} = req.body;
		if (
			!id ||
			!title ||
			!journal ||
			!authors ||
			!publicationDate ||
			!volume ||
			!year ||
			!quartile ||
			!doi
		)
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
				authors,
				publicationDate,
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
		});
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
 * @route GET /api/journal-paper/get-by-user
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
 * @route DELETE /api/journal-paper/delete-by-id
 * @access Private
 * @param req
 * @param res
 */
export const deleteJournalPaperById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.body;
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
