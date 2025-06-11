import { Router } from "express";
import {
	deleteUploadedImage,
	uploadImage,
} from "../controllers/image.controller";
const imageRouter = Router();

imageRouter
	.post("/uploadURL", uploadImage)
	.delete("/deleteImage", deleteUploadedImage);

export default imageRouter;
