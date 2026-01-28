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
				authors: authors.split(",").map((author: string) => author.trim()),
				createdBy: req.user?.userId as number,
			},
		});
		await prisma.user.update({
			where: { id: req.user!.userId as number },
			data: {
				conferencePapers_count: { increment: 1 }
			}
		})
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
		const existingConferencePaper = await prisma.conference_Paper.findUnique({
			where: { id: id as number },
		});
		if (!existingConferencePaper)
			throw new AppError("Conference paper not found", 404);
		if (req.user?.role !== "ADMIN" && existingConferencePaper.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to update this conference paper", 403);
		}
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
				authors: authors.split(",").map((author: string) => author.trim()),
			}
		});
		response(res, 200, "Conference paper updated successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description fetching all conference papers
 * @route GET /api/conference-paper/get-all?page=&limit=
 * @access Public
 * @param req
 * @param res
 */
export const getAllConferencePapers = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = "1", limit = "10" } = req.query;
		const skip = (Number(page) - 1) * Number(limit);
		const conferencePapers = await prisma.conference_Paper.findMany({
			orderBy: { createdAt: "desc" },
			skip: skip,
			take: Number(limit),
		});
		if (!conferencePapers || conferencePapers.length === 0)
			throw new AppError("No conference papers found", 404);
		response(res, 200, "Conference papers fetched successfully", {
			conferencePapers,
		});
	}
);

/**
 *
 * @description fetching all conference papers by user ID
 * @route GET /api/conference-paper/get-all-by-user-id/:userId?page=&limit=
 * @access Private
 * @param req
 * @param res
 */
export const getAllConferencePapersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.params.userId || req.user?.userId;
		const { page = "1", limit = "10" } = req.query;
		const skip = (Number(page) - 1) * Number(limit);
		const conferencePapers = await prisma.conference_Paper.findMany({
			where: {
				createdBy: Number(userId),
			},
			orderBy: { createdAt: "desc" },
			skip: skip,
			take: Number(limit),
		});
		if (!conferencePapers || conferencePapers.length === 0)
			throw new AppError("No conference papers found for this user", 404);
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
			where: { id: Number(id) }
		});
		if (!conferencePaper)
			throw new AppError("Conference paper not found", 404);
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
		const existingConferencePaper = await prisma.conference_Paper.findUnique({
			where: { id: Number(id) },
		});
		if (!existingConferencePaper)
			throw new AppError("Conference paper not found", 404);
		if (req.user?.role !== "ADMIN" && existingConferencePaper.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to delete this conference paper", 403);
		}
		const conferencePaper = await prisma.conference_Paper.delete({
			where: { id: Number(id) },
		});
		await prisma.user.update({
			where: { id: req.user!.userId as number },
			data: {
				conferencePapers_count: { decrement: 1 }
			}
		})
		response(res, 200, "Conference paper deleted successfully", {
			conferencePaper,
		});
	}
);
