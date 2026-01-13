import { Router } from "express";
import {
	createRecentUpdate,
	deleterecentUpdate,
	getrecentUpdates,
} from "../controllers/notifications/recentUpdates.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const recentUpdateRouter = Router();

recentUpdateRouter
	.post("/create",auth,authorizePermission(PERMISSIONS.CREATE_RECENT_UPDATE), createRecentUpdate)
	.delete("/delete", auth, authorizePermission(PERMISSIONS.DELETE_RECENT_UPDATE), deleterecentUpdate)
	.get("/getrecentUpdates", getrecentUpdates); // query params: page, limit

export default recentUpdateRouter;
