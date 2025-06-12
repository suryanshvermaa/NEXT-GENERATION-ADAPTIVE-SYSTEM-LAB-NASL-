import { Router } from "express";
import {
	addImage,
	deleteGalleryImage,
	getAllImages,
} from "../controllers/photoGallery.controller";
import { auth } from "../middlewares/auth.middleware";
const photoGalleryRouter = Router();

photoGalleryRouter
	.post("/addImage", auth, addImage)
	.get("/getImages", getAllImages)
	.delete("/deleteImage", auth, deleteGalleryImage);

export default photoGalleryRouter;
