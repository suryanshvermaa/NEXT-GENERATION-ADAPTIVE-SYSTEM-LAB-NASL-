import { Router } from "express";
import {
	addImage,
	deleteGalleryImage,
	getAllImages,
	getAllImagesOfGroupMoment,
} from "../controllers/photoGallery.controller";
import { adminAuth } from "../middlewares/auth.middleware";
const photoGalleryRouter = Router();

photoGalleryRouter
	.post("/addImage", adminAuth, addImage)
	.get("/getImages", getAllImages)
	.delete("/deleteImage", adminAuth, deleteGalleryImage)
	.get("/getGroupMomentImages", getAllImagesOfGroupMoment);

export default photoGalleryRouter;
