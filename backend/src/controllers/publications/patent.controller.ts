import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 *
 * @description creating patent
 * @route POST /api/patent/create
 * @access Private
 * @param req
 * @param res
 */
export const createPatent = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			title,
			type = null,
			grantNo = null,
			grantDate = null,
			publicationDate = null,
			inventors,
		} = req.body;
		if (!title || !inventors)
			throw new AppError(
				"Please provide all required fields: title, type, grantNo, inventors",
				400
			);
		const patent = await prisma.patent.create({
			data: {
				title,
				type,
				grantNo,
				grantDate: grantDate ? new Date(grantDate) : null,
				publicationDate: publicationDate
					? new Date(publicationDate)
					: null,
				inventors: inventors.split(",").map((inventor: string) => inventor.trim()),
				createdBy: req.user?.userId as number,
			},
		});
		await prisma.user.update({
			where: { id: req.user!.userId as number },
			data: {
				patents_count: { increment: 1 }
			}
		})
		response(res, 201, "Patent created successfully", { patent });
	}
);

/**
 *
 * @description updating patent
 * @route POST /api/patent/update
 * @access Private
 * @param req
 * @param res
 */
export const updatePatent = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			id,
			title,
			type = null,
			grantNo = null,
			grantDate = null,
			publicationDate = null,
			inventors,
		} = req.body;
		if (!id || !title || !inventors)
			throw new AppError(
				"Please provide all required fields: id, title, type, grantNo, inventors",
				400
			);
		const existingPatent = await prisma.patent.findUnique({
			where: { id: Number(id) },
		});
		if (!existingPatent)
			throw new AppError("Patent with given id does not exist", 404);
		if (req.user?.role !== 'ADMIN' && existingPatent.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to update this patent", 403);
		}
		const patent = await prisma.patent.update({
			where: { id: Number(id) },
			data: {
				title,
				type,
				grantNo,
				grantDate: grantDate ? new Date(grantDate) : null,
				publicationDate: publicationDate
					? new Date(publicationDate)
					: null,
				inventors: inventors.split(",").map((inventor: string) => inventor.trim()),
			},
		});
		response(res, 200, "Patent updated successfully", { patent });
	}
);

/**
 *
 * @description fetching patent by id
 * @route GET /api/patent/:id
 * @access Public
 * @param req
 * @param res
 */
export const getPatentById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id) throw new AppError("Please provide id of patent", 400);
		const patent = await prisma.patent.findUnique({
			where: { id: Number(id) }
		});
		if (!patent) throw new AppError("Patent not found", 404);
		response(res, 200, "Patent fetched successfully", { patent });
	}
);

/**
 *
 * @description deleting patent by id
 * @route DELETE /api/patent/:id
 * @access Private
 * @param req
 * @param res
 */
export const deletePatent = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of patent", 400);
		const existingPatent = await prisma.patent.findUnique({
			where: { id: Number(id) },
		});
		if (!existingPatent)
			throw new AppError("Patent with given id does not exist", 404);
		if (req.user?.role !== 'ADMIN' && existingPatent.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to delete this patent", 403);
		}
		const patent = await prisma.patent.delete({
			where: { id: Number(id) },
		});
		await prisma.user.update({
			where: { id: req.user!.userId as number },
			data: {
				patents_count: { decrement: 1 }
			}
		})
		response(res, 200, "Patent deleted successfully", { patent });
	}
);

/**
 *
 * @description fetching all patents by user id
 * @route GET /api/patent/get-all-by-user-id?page=&limit=
 * @access Private
 * @param req
 * @param res
 */
export const getAllPatentsByInventorId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.params.userId || req.user?.userId;
		const page = parseInt(req.query.page as string) || 1;
		const limit = parseInt(req.query.limit as string) || 10;
		const skip = (page - 1) * limit;
		const patents = await prisma.patent.findMany({
			where: {
				createdBy: userId as number,
			},
			orderBy: { createdAt: "desc" },
			skip,
			take: limit,
		});
		if (!patents || patents.length === 0)
			throw new AppError("No patents found for this user", 404);
		response(res, 200, "Patents fetched successfully", { patents });
	}
);

/**
 * @description fetching all patents
 * @route GET /api/patent/get-all?page=&limit=
 * @access Public
 */
export const getAllPatents = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = "1", limit = "10" } = req.query;
		const pageNumber = parseInt(page as string);
		const limitNumber = parseInt(limit as string);
		const skip = (pageNumber - 1) * limitNumber;
		const patents = await prisma.patent.findMany({
			orderBy: { createdAt: "desc" },
			skip,
			take: limitNumber,
		});
		response(res, 200, "Patents fetched successfully", { patents });
	}
);
