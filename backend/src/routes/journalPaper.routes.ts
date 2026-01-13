import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import {
	createJournalPaper,
	deleteJournalPaperById,
	getAllJournalPaper,
	getJounalPapersByUserId,
	getJournalPaperById,
	updateJournalPaper,
} from "../controllers/publications/journalPaper.controller";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const journalPaperRouter = Router();

journalPaperRouter
	.post("/create", auth,authorizePermission(PERMISSIONS.CREATE_JOURNAL_PAPER), createJournalPaper)
	.get("/get-all", getAllJournalPaper) // query params: page, limit
	.get("/:id", getJournalPaperById)
	.put("/:id", auth, authorizePermission(PERMISSIONS.UPDATE_JOURNAL_PAPER), updateJournalPaper)
	.delete("/:id", auth, authorizePermission(PERMISSIONS.DELETE_JOURNAL_PAPER), deleteJournalPaperById)
	.get("/get-all-by-user-id/:userId", getJounalPapersByUserId); // query params: page, limit

export default journalPaperRouter;
