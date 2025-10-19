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
				inventors: {
					connect: inventors.map((id: number) => ({ id })),
				},
			},
			include: {
				inventors: {
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
					connect: inventors.map((id: number) => ({ id })),
				},
			},
			include: {
				inventors: {
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
		response(res, 200, "Patent updated successfully", { patent });
	}
);

/**
 *
 * @description fetching patent by id
 * @route GET /api/patent/:id
 * @access Private
 * @param req
 * @param res
 */
export const getPatentById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id) throw new AppError("Please provide id of patent", 400);
		const patent = await prisma.patent.findUnique({
			where: { id: Number(id) },
			include: {
				inventors: {
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
		if (!patent) throw new AppError("Patent not found", 404);
		if (patent.inventors) {
			for (const inventor of patent.inventors) {
				inventor.profileImage = inventor.profileImage
					? await signedUrl(inventor.profileImage, 3)
					: "";
			}
		}
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
		const patent = await prisma.patent.delete({
			where: { id: Number(id) },
		});
		response(res, 200, "Patent deleted successfully", { patent });
	}
);

/**
 *
 * @description fetching all patents by user id
 * @route GET /api/patent/get-all-by-user-id
 * @access Private
 * @param req
 * @param res
 */
export const getAllPatentsByInventorId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.user?.userId;
		const patents = await prisma.patent.findMany({
			where: {
				inventors: {
					some: {
						id: userId as number,
					},
				},
			},
			orderBy: { createdAt: "desc" },
			include: {
				inventors: {
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
		if (!patents || patents.length === 0)
			throw new AppError("No patents found for this user", 404);
		for (const patent of patents) {
			if (patent.inventors) {
				for (const inventor of patent.inventors) {
					inventor.profileImage = inventor.profileImage
						? await signedUrl(inventor.profileImage, 3)
						: "";
				}
			}
		}
		response(res, 200, "Patents fetched successfully", { patents });
	}
);

/**
 * @description fetching all patents
 * @route GET /api/patent/get-all
 * @access Public
 */
export const getAllPatents = asyncHandler(
	async (req: Request, res: Response) => {
		const patents = await prisma.patent.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				inventors: {
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
		for (const patent of patents) {
			if (patent.inventors) {
				for (const inventor of patent.inventors) {
					inventor.profileImage = inventor.profileImage
						? await signedUrl(inventor.profileImage, 3)
						: "";
				}
			}
		}
		if (!patents || patents.length === 0)
			throw new AppError("No patents found", 404);
		response(res, 200, "Patents fetched successfully", { patents });
	}
);
