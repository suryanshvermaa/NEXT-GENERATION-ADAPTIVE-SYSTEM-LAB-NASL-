import { Router } from "express";
import {
	deleteUploadedImage,
	uploadImage,
} from "../controllers/image.controller";
import { adminAuth, auth } from "../middlewares/auth.middleware";
const imageRouter = Router();

imageRouter
	.post("/uploadURL", adminAuth, uploadImage)
	.delete("/deleteImage", adminAuth, deleteUploadedImage);

export default imageRouter;
