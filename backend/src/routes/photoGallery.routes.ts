import { Router } from "express";
import {
	addImage,
	deleteGalleryImage,
	getAllImages,
	getAllImagesOfGroupMoment,
} from "../controllers/photoGallery.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const photoGalleryRouter = Router();

photoGalleryRouter
	.post("/addImage",auth,authorizePermission(PERMISSIONS.ADD_GALLERY_IMAGE), addImage)
	.get("/getImages", getAllImages)
	.delete("/deleteImage", auth, authorizePermission(PERMISSIONS.DELETE_GALLERY_IMAGE), deleteGalleryImage)
	.get("/getGroupMomentImages", getAllImagesOfGroupMoment);

export default photoGalleryRouter;
