import { Router } from "express";
import {
	createRecentUpdate,
	deleterecentUpdate,
	getrecentUpdates,
} from "../controllers/notifications/recentHighlight.controller";
const recentUpdateRouter = Router();

recentUpdateRouter
	.post("/create", createRecentUpdate)
	.delete("/delete", deleterecentUpdate)
	.get("/getrecentUpdates", getrecentUpdates);

export default recentUpdateRouter;
