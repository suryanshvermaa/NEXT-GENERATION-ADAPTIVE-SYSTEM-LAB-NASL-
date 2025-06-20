import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";

/**
 * @description creating a patent
 * @route POST /api/patent/create
 * @access Private
 * @param req
 * @param res
 */
export const createPatent = asyncHandler(
	async (req: Request, res: Response) => {
		const { title, type, grantNo, grantDate, publicationDate, inventors } =
			req.body;

		if (!title || !type || !grantNo || !inventors) {
			throw new AppError(
				"Please provide all required fields: title, type, grantNo, inventors",
				400
			);
		}

		const patent = await prisma.patent.create({
			data: {
				title,
				type,
				grantNo,
				grantDate: grantDate ? new Date(grantDate) : null,
				publicationDate: publicationDate
					? new Date(publicationDate)
					: null,
				inventors: {
					connect: inventors.map((id: number) => ({ id })),
				},
			},
		});

		response(res, 201, "Patent created successfully", { patent });
	}
);

/**
 * @description fetching all patents
 * @route GET /api/patent/get-all
 * @access Public
 * @param req
 * @param res
 */
export const getAllPatents = asyncHandler(
	async (req: Request, res: Response) => {
		const patents = await prisma.patent.findMany({
			include: { inventors: true },
		});
		response(res, 200, "Patents fetched successfully", { patents });
	}
);

/**
 * @description fetching a single patent by ID
 * @route GET /api/patent/:id
 * @access Public
 * @param req
 * @param res
 */
export const getPatentById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const patent = await prisma.patent.findUnique({
			where: { id: Number(id) },
			include: { inventors: true },
		});

		if (!patent) {
			throw new AppError("Patent not found", 404);
		}

		response(res, 200, "Patent fetched successfully", { patent });
	}
);

/**
 * @description updating a patent by ID
 * @route PUT /api/patent/:id
 * @access Private
 * @param req
 * @param res
 */
export const updatePatent = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const { title, type, grantNo, grantDate, publicationDate, inventors } =
			req.body;

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
				inventors: {
					set: inventors?.map((id: number) => ({ id })),
				},
			},
			include: { inventors: true },
		});

		response(res, 200, "Patent updated successfully", { patent });
	}
);

/**
 * @description deleting a patent by ID
 * @route DELETE /api/patent/:id
 * @access Private
 * @param req
 * @param res
 */
export const deletePatent = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;

		const patent = await prisma.patent.delete({
			where: { id: Number(id) },
		});

		response(res, 200, "Patent deleted successfully", { patent });
	}
);

/**
 * @description fetching all patents by inventor ID
 * @route POST /api/patent/get-all-by-inventor-id
 * @access Private
 * @param req
 * @param res
 */
export const getAllPatentsByInventorId = asyncHandler(
	async (req: Request, res: Response) => {
		const { userId } = req.body;
		const patents = await prisma.patent.findMany({
			where: {
				inventors: {
					some: {
						id: userId,
					},
				},
			},
			include: { inventors: true },
			orderBy: { createdAt: "desc" },
		});

		if (!patents || patents.length === 0) {
			throw new AppError("No patents found for this inventor", 404);
		}

		response(res, 200, "Patents fetched successfully", { patents });
	}
);
