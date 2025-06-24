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
const conferenceRouter = Router();

conferenceRouter
	.post("/create", auth, createConferencePaper)
	.get("/get-all", getAllConferencePapers)
	.get("/:id", getConferencePaperById)
	.put("/:id", auth, updateConferencePaper)
	.delete("/:id", auth, deleteConferencePaperById)
	.get("/get-all-by-user-id", getAllConferencePapersByUserId);

export default conferenceRouter;
