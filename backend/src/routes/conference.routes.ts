import { Router } from "express";
import {
	createConferencePaper,
	deleteConferencePaperById,
	getAllConferencePapers,
	getAllConferencePapersByUserId,
	getConferencePaperById,
	updateConferencePaper,
} from "../controllers/publications/conferencePapers.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const conferenceRouter = Router();

conferenceRouter
	.post("/create", auth,authorizePermission(PERMISSIONS.CREATE_CONFERENCE_PAPER), createConferencePaper)
	.get("/get-all", getAllConferencePapers) // query params: page, limit
	.get("/:id", getConferencePaperById)
	.put("/:id", auth, authorizePermission(PERMISSIONS.UPDATE_CONFERENCE_PAPER), updateConferencePaper)
	.delete("/:id", auth, authorizePermission(PERMISSIONS.DELETE_CONFERENCE_PAPER), deleteConferencePaperById)
	.get("/get-all-by-user-id/:userId", getAllConferencePapersByUserId); // query params: page, limit

export default conferenceRouter;
