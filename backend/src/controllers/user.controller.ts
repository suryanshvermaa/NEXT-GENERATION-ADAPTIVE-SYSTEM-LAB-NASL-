import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import response from "../utils/response";
import { getUploadImageURL } from "../s3";

/**
 * @description Create a new user
 * @route POST /api/v1/users
 * @access Public
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
	const url=await getUploadImageURL("myScreenshot.png");
	response(res, 201, "user created", { url });
});
