import { Router } from "express";
import {
	createHighlight,
	deletehighlight,
	getHighlights,
} from "../controllers/notifications/highlights.controller";
import { adminAuth } from "../middlewares/auth.middleware";
const highlightRouter = Router();

highlightRouter
	.post("/create", adminAuth, createHighlight)
	.delete("/delete", adminAuth, deletehighlight)
	.get("/getHighlights", getHighlights); // query params: page, limit

export default highlightRouter;
