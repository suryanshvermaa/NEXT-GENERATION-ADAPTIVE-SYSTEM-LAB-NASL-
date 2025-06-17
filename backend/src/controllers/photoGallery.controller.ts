import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/error";
import prisma from "../config/db";
import response from "../utils/response";
import { deleteImage, signedUrl } from "../s3";
/**
 *
 * @description upload a photo to the gallery
 * @route POST /photogallery/addImage
 * @access Private
 * @param req
 * @param res
 */
export const addImage = asyncHandler(async (req: Request, res: Response) => {
	const { imageUrl, tags } = req.body;
	if (!imageUrl) throw new AppError("image Url and tags both required", 400);
	const galleryImage = await prisma.photoGallery.create({
		data: {
			imageURL: imageUrl,
			tags: (tags as string).split(",").map((tag) => tag.trim()),
		},
	});
	if (!galleryImage) throw new AppError("error in creating image", 400);
	response(res, 201, "gallery image added", { galleryImage });
});

/**
 *
 * @description upload a photo to the gallery
 * @route GET /photogallery/getImages
 * @access Public
 * @param req
 * @param res
 */
export const getAllImages = asyncHandler(
	async (req: Request, res: Response) => {
		const images = await prisma.photoGallery.findMany({
			select: {
				id: true,
				imageURL: true,
				tags: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		if (!images) throw new AppError("Images not found", 400);
		for(let im of images){
			im.imageURL = await signedUrl(im.imageURL, 5);
		}
		response(res, 200, "images fetched successfully", { images });
	}
);

/**
 *
 * @description upload a photo to the gallery
 * @route GET /photogallery/deleteImage
 * @access Private
 * @param req
 * @param res
 */
export const deleteGalleryImage = asyncHandler(
	async (req: Request, res: Response) => {
		const { imageId } = req.body;
		if (!imageId) throw new AppError("imageId is required", 400);
		const image = await prisma.photoGallery.findUnique({
			where: {
				id: imageId,
			},
		});
		if (!image) throw new AppError("This image does not exists", 400);
		await prisma.photoGallery.delete({
			where: {
				id: imageId,
			},
		});
		await deleteImage(image.imageURL);
		response(res, 200, "photo deleted successfully", {});
	}
);
