import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { deleteImage } from "../../s3";

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
		response(res, 201, "highlight created", { highlight:newHighlight });
	}
);

/**
 *
 * @description update research area
 * @route POST /api/highlight/updatehighlight
 * @access Private
 * @param req
 * @param res
 */
export const updatehighlight = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, description, imageURL, id } = req.body;
		if (!id || !name || !description || !imageURL)
			throw new AppError("all fields are required", 400);
		const updatedhighlight = await prisma.highlight.update({
			where: {
				id: id as number,
			},
			data: {
				imageURL,
				name,
				description,
			},
		});
		if (!updatedhighlight)
			throw new AppError("Error in updating highlight", 400);
		response(res, 201, "research Area updated", { updatedhighlight });
	}
);

/**
 *
 * @description delete research area
 * @route POST /api/highlight/deletehighlight
 * @access Private
 * @param req
 * @param res
 */
export const deletehighlight = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.body;
		if (!id) throw new AppError("Id is required", 400);
		const highlight = await prisma.highlight.delete({
			where: {
				id,
			},
		});
		await deleteImage(highlight.imageURL);
		response(res, 200, "highlight deleted successfully", {});
	}
);

/**
 *
 * @description fetching research area
 * @route POST /api/highlight/gethighlight?id="idofhighlight"
 * @access Private
 * @param req
 * @param res
 */
export const gethighlight = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id) throw new AppError("id is required", 400);
		const highlight = await prisma.highlight.findUnique({
			where: {
				id: Number(id),
			},
		});
		if (!highlight) throw new AppError("highlight not found", 400);
		response(res, 200, "highlight fetched successfully", {
			highlight,
		});
	}
);

/**
 *
 * @description getReasearchAreas
 * @route POST /api/highlight/getReasearchAreas
 * @access Private
 * @param req
 * @param res
 */
export const getReasearchAreas = asyncHandler(
	async (req: Request, res: Response) => {
		const highlights = await prisma.highlight.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		if (!highlights)
			throw new AppError("Research Areas are not found", 400);
		response(res, 200, "Research Areas fetched successfully", {
			highlights,
		});
	}
);
