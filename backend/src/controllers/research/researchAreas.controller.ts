import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { deleteImage, signedUrl } from "../../s3";

/**
 *
 * @description create research area
 * @route POST /api/researchArea/createReasearchArea
 * @access Private
 * @param req
 * @param res
 */
export const createReasearchArea = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, description, imageURL } = req.body;
		if (!name || !description || !imageURL)
			throw new AppError("All fields are required", 400);
		const researchArea = await prisma.researchArea.create({
			data: {
				name,
				description,
				imageURL,
			},
		});
		if (!researchArea)
			throw new AppError("Error in creating researchArea", 400);
		response(res, 201, "research Area created", { researchArea:{...researchArea,imageURL:await signedUrl(imageURL,3)} });
	}
);

/**
 *
 * @description update research area
 * @route POST /api/researchArea/updateResearchArea
 * @access Private
 * @param req
 * @param res
 */
export const updateResearchArea = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, description, imageURL, id } = req.body;
		if (!id || !name || !description || !imageURL)
			throw new AppError("all fields are required", 400);
		const updatedResearchArea = await prisma.researchArea.update({
			where: {
				id: id as number,
			},
			data: {
				imageURL,
				name,
				description,
			},
		});
		if (!updatedResearchArea)
			throw new AppError("Error in updating researchArea", 400);
		response(res, 201, "research Area updated", { updatedResearchArea:{...updatedResearchArea,imageURL:await signedUrl(imageURL,3)} });
	}
);

/**
 *
 * @description delete research area
 * @route POST /api/researchArea/deleteResearchArea
 * @access Private
 * @param req
 * @param res
 */
export const deleteResearchArea = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.body;
		if (!id) throw new AppError("Id is required", 400);
		const researchArea = await prisma.researchArea.delete({
			where: {
				id,
			},
		});
		await deleteImage(researchArea.imageURL);
		response(res, 200, "researchArea deleted successfully", {});
	}
);

/**
 *
 * @description fetching research area
 * @route POST /api/researchArea/getResearchArea?id="idofresearchArea"
 * @access Private
 * @param req
 * @param res
 */
export const getResearchArea = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id) throw new AppError("id is required", 400);
		const researchArea = await prisma.researchArea.findUnique({
			where: {
				id: Number(id),
			},
		});
		const imageURL = await signedUrl(researchArea?.imageURL!, 5);
		if (!researchArea) throw new AppError("researchArea not found", 400);
		response(res, 200, "researchArea fetched successfully", {
			researchArea: { ...researchArea, imageURL },
		});
	}
);

/**
 *
 * @description getReasearchAreas
 * @route POST /api/researchArea/getReasearchAreas
 * @access Private
 * @param req
 * @param res
 */
export const getReasearchAreas = asyncHandler(
	async (req: Request, res: Response) => {
		const researchAreas = await prisma.researchArea.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		if (!researchAreas)
			throw new AppError("Research Areas are not found", 400);
		for (let rs of researchAreas) {
			rs.imageURL = await signedUrl(rs.imageURL, 5);
		}
		response(res, 200, "Research Areas fetched successfully", {
			researchAreas,
		});
	}
);
