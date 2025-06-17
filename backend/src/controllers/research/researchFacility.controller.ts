import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { deleteImage, signedUrl } from "../../s3";

/**
 *
 * @description create research area
 * @route POST /api/researchFacility/createResearchFacility
 * @access Private
 * @param req
 * @param res
 */
export const createResearchFacility = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, description, imageURL } = req.body;
		if (!name || !description)
			throw new AppError("All fields are required", 400);
		const researchFacility = await prisma.researchFacility.create({
			data: {
				name,
				description,
				imageURL,
			},
		});
		if (!researchFacility)
			throw new AppError("Error in creating researchFacility", 400);
		response(res, 201, "research Facility created", { researchFacility });
	}
);

/**
 *
 * @description update research facility
 * @route POST /api/researchFacility/updateResearchFacility
 * @access Private
 * @param req
 * @param res
 */
export const updateResearchFacility = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, description, imageURL, id } = req.body;
		if (!id || !name || !description)
			throw new AppError("all fields are required", 400);
		const updatedresearchFacility = await prisma.researchFacility.update({
			where: {
				id: id as number,
			},
			data: {
				imageURL,
				name,
				description,
			},
		});
		if (!updatedresearchFacility)
			throw new AppError("Error in updating researchFacility", 400);
		response(res, 201, "research Facility updated", {
			updatedresearchFacility,
		});
	}
);

/**
 *
 * @description delete research facility
 * @route POST /api/researchFacility/deleteResearchFacility
 * @access Private
 * @param req
 * @param res
 */
export const deleteResearchFacility = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.body;
		if (!id) throw new AppError("Id is required", 400);
		const researchFacility = await prisma.researchFacility.delete({
			where: {
				id,
			},
		});
		if (researchFacility.imageURL)
			await deleteImage(researchFacility.imageURL);
		response(res, 200, "researchFacility deleted successfully", {});
	}
);

/**
 *
 * @description fetching research Facility
 * @route POST /api/researchFacility/getResearchFacility?id="idofresearchFacility"
 * @access Private
 * @param req
 * @param res
 */
export const getResearchFacility = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.query;
		if (!id) throw new AppError("id is required", 400);
		const researchFacility = await prisma.researchFacility.findUnique({
			where: {
				id: Number(id),
			},
		});
		if (!researchFacility)
			throw new AppError("researchFacility not found", 400);
		const imageURL=await signedUrl(researchFacility.imageURL!,2);
		response(res, 200, "researchFacility fetched successfully", {
			researchFacility:{...researchFacility,imageURL},
		});
	}
);

/**
 *
 * @description getReasearchFacilities
 * @route POST /api/researchFacility/getReasearchAreas
 * @access Private
 * @param req
 * @param res
 */
export const getReasearchFacilities = asyncHandler(
	async (req: Request, res: Response) => {
		const researchFacilities = await prisma.researchFacility.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		if (!researchFacilities)
			throw new AppError("Research Facilities are not found", 400);
		for(let rs of researchFacilities){
			rs.imageURL=await signedUrl(rs.imageURL!,5);
		}
		response(res, 200, "Research Facilities fetched successfully", {
			researchFacilities,
		});
	}
);
