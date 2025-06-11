import { deleteImage, uploadImageURL } from "../s3";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/error";
import response from "../utils/response";
import { Request, Response } from "express";

/**
 *
 * @description Upload an image to cloud storage
 * @route POST /api/image/uploadURL
 * @access Private
 * @param req
 * @param res
 */
export const uploadImage = asyncHandler(async (req: Request, res: Response) => {
	const { imageName } = req.body;
	if (!imageName) throw new AppError("imageName is required!", 400);
	const uploadUrl = await uploadImageURL(imageName);
	response(res, 201, "image url created successfully", {
		imageUploadingUrl: uploadUrl,
		imageUrl: uploadUrl.split("?")[0],
	});
});

/**
 *
 * @description Upload an image to cloud storage
 * @route DELETE /api/image/deleteImage
 * @access Private
 * @param req
 * @param res
 */
export const deleteUploadedImage = asyncHandler(
	async (req: Request, res: Response) => {
		const { imageURL } = req.body;
		if (!imageURL) throw new AppError("imageURL is required!", 400);
		await deleteImage(imageURL);
		response(res, 201, "image deleted successfully", {});
	}
);
