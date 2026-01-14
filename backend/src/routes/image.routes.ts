import { Router } from "express";
import {
	deleteUploadedImage,
	uploadImage,
} from "../controllers/image.controller";
import { PERMISSIONS } from "../RBAC/permissions";
import { authorizePermission } from "../middlewares/role.middleware";
import { auth } from "../middlewares/auth.middleware";
const imageRouter = Router();

imageRouter
	.post("/uploadURL",auth, authorizePermission(PERMISSIONS.UPLOAD_IMAGE), uploadImage)
	.delete("/deleteImage", auth, authorizePermission(PERMISSIONS.DELETE_IMAGE), deleteUploadedImage);
export default imageRouter;
