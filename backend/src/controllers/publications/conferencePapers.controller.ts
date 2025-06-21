import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
/**
 *
 * @description creating conference paper
 * @route POST /api/conference-paper/create
 * @access Private
 * @param req
 * @param res
 */
export const createConferencePaper = asyncHandler(async (req: Request, res: Response) => {
	// Conference Papers: Title	Authors	Conference	Location	Year	Pages	Indexing DOI
	const { title, authors, conference, location, year, pages, indexing, doi } =
		req.body;
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
			authors,
			conference,
			location,
			year,
			pages,
			indexing,
			doi,
		},
	});
	response(res, 201, "Conference paper created successfully", {
		conferencePaper,
	});
});

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
		const conferencePapers = await prisma.conference_Paper.findMany();
		response(res, 200, "Conference papers fetched successfully", {
			conferencePapers,
		});
	}
);

/**
 *
 * @description fetching a single conference paper by ID
 * @route GET /api/conference-paper/:id
 * @access Public
 * @param req
 * @param res
 */
export const getConferencePaperById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const conferencePaper = await prisma.conference_Paper.findUnique({
			where: { id: Number(id) },
		});

		if (!conferencePaper) {
			throw new AppError("Conference paper not found", 404);
		}

		response(res, 200, "Conference paper fetched successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description updating a conference paper by ID
 * @route PUT /api/conference-paper/:id
 * @access Private
 * @param req
 * @param res
 */
export const updateConferencePaper = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const {
			title,
			authors,
			conference,
			location,
			year,
			pages,
			indexing,
			doi,
		} = req.body;

		const conferencePaper = await prisma.conference_Paper.update({
			where: { id: Number(id) },
			data: {
				title,
				authors,
				conference,
				location,
				year,
				pages,
				indexing,
				doi,
			},
		});

		response(res, 200, "Conference paper updated successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description deleting a conference paper by ID
 * @route DELETE /api/conference-paper/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteConferencePaper = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;

		const conferencePaper = await prisma.conference_Paper.delete({
			where: { id: Number(id) },
		});

		response(res, 200, "Conference paper deleted successfully", {
			conferencePaper,
		});
	}
);

/**
 *
 * @description fetching all conference papers by user ID
 * @route POST /api/conference-paper/get-all-by-user-id
 * @access Private
 * @param req
 * @param res
 */
export const getAllConferencePapersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const { userId } = req.body;
		const conferencePapers = await prisma.conference_Paper.findMany({
			where: {
				authors: {
					some: {
						id: userId,
					},
				},
			},
			orderBy: { createdAt: "desc" },
		});
		if (!conferencePapers || conferencePapers.length === 0) {
			throw new AppError("No conference papers found for this user", 404);
		}
		response(res, 200, "Conference papers fetched successfully", {
			conferencePapers,
		});
	}
);
