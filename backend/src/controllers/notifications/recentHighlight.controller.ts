import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
/**
 *
 * @description create recent update
 * @route POST /api/recentUpdate/create
 * @access Private
 * @param req
 * @param res
 */
export const createRecentUpdate = asyncHandler(
	async (req: Request, res: Response) => {
		const { update, description, date, link } = req.body;
		if (!update || !description || !date)
			throw new AppError("All fields are required", 400);
		const newrecentUpdate = await prisma.recentUpdate.create({
			data: {
				update,
				description,
				date,
				link,
			},
		});
		if (!newrecentUpdate)
			throw new AppError("Error in creating recentUpdate", 400);
		response(res, 201, "recentUpdate created", { recentUpdate: newrecentUpdate });
	}
);

/**
 *
 * @description delete recentUpdate
 * @route POST /api/recentUpdate/delete
 * @access Private
 * @param req
 * @param res
 */
export const deleterecentUpdate = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.body;
		if (!id) throw new AppError("Id is required", 400);
		await prisma.recentUpdate.delete({
			where: {
				id,
			},
		});
		response(res, 200, "recentUpdate deleted successfully", {});
	}
);

/**
 *
 * @description fetching recentUpdates
 * @route GET /api/recentUpdate/getrecentUpdates
 * @access Public
 * @param req
 * @param res
 */
export const getrecentUpdates = asyncHandler(
	async (req: Request, res: Response) => {
		const recentUpdates = await prisma.recentUpdate.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		if (!recentUpdates) throw new AppError("recentUpdates are not found", 400);
		response(res, 200, "recentUpdates fetched successfully", {
			recentUpdates,
		});
	}
);
