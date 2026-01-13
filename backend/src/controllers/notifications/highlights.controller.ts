import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
/**
 *
 * @description create highlight
 * @route POST /api/highlight/create
 * @access Private
 * @param req
 * @param res
 */
export const createHighlight = asyncHandler(
	async (req: Request, res: Response) => {
		const { highlight, description, date, link } = req.body;
		if (!highlight || !description || !date)
			throw new AppError("All fields are required", 400);
		const newHighlight = await prisma.highlight.create({
			data: {
				highlight,
				description,
				date,
				link,
			},
		});
		if (!newHighlight)
			throw new AppError("Error in creating highlight", 400);
		response(res, 201, "highlight created", { highlight: newHighlight });
	}
);

/**
 *
 * @description delete highlight
 * @route POST /api/highlight/delete
 * @access Private
 * @param req
 * @param res
 */
export const deletehighlight = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.body;
		if (!id) throw new AppError("Id is required", 400);
		await prisma.highlight.delete({
			where: {
				id,
			},
		});
		response(res, 200, "highlight deleted successfully", {});
	}
);

/**
 *
 * @description fetching highlights
 * @route GET /api/highlight/getHighlights?page=&limit=
 * @access Private
 * @param req
 * @param res
 */
export const getHighlights = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = 1, limit = 10 } = req.query;
		const skip = (Number(page) - 1) * Number(limit);
		const highlights = await prisma.highlight.findMany({
			orderBy: {
				createdAt: "desc",
			},
			skip: skip,
			take: Number(limit),
		});
		if (!highlights) throw new AppError("Highlights are not found", 400);
		response(res, 200, "Highlights fetched successfully", {
			highlights,
		});
	}
);
