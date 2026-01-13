import { Router } from "express";
import {
	createHighlight,
	deletehighlight,
	getHighlights,
} from "../controllers/notifications/highlights.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const highlightRouter = Router();

highlightRouter
	.post("/create", auth, authorizePermission(PERMISSIONS.CREATE_HIGHLIGHT), createHighlight)
	.delete("/delete", auth, authorizePermission(PERMISSIONS.DELETE_HIGHLIGHT), deletehighlight)
	.get("/getHighlights", getHighlights); // query params: page, limit

export default highlightRouter;
