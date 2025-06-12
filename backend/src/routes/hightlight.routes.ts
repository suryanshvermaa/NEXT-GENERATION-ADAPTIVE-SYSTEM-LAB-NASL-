import { Router } from "express";
import {
	createHighlight,
	deletehighlight,
	getHighlights,
} from "../controllers/notifications/highlights.controller";
const highlightRouter = Router();

highlightRouter
	.post("/create", createHighlight)
	.delete("/delete", deletehighlight)
	.get("/getHighlights", getHighlights);

export default highlightRouter;
