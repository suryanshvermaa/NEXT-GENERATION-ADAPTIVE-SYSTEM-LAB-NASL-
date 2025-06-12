import { Router } from "express";
import {
	createHighlight,
	deletehighlight,
	getHighlights,
} from "../controllers/notifications/highlights.controller";
import { auth } from "../middlewares/auth.middleware";
const highlightRouter = Router();

highlightRouter
	.post("/create", auth, createHighlight)
	.delete("/delete", auth, deletehighlight)
	.get("/getHighlights", getHighlights);

export default highlightRouter;
