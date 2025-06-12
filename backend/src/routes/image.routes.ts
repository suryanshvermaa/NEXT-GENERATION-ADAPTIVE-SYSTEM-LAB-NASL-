import { Router } from "express";
import {
	deleteUploadedImage,
	uploadImage,
} from "../controllers/image.controller";
import { auth } from "../middlewares/auth.middleware";
const imageRouter = Router();

imageRouter
	.post("/uploadURL", auth, uploadImage)
	.delete("/deleteImage", auth, deleteUploadedImage);

export default imageRouter;
