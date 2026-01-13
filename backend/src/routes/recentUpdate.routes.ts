import { Router } from "express";
import {
	createRecentUpdate,
	deleterecentUpdate,
	getrecentUpdates,
} from "../controllers/notifications/recentUpdates.controller";
import { adminAuth } from "../middlewares/auth.middleware";
const recentUpdateRouter = Router();

recentUpdateRouter
	.post("/create", adminAuth, createRecentUpdate)
	.delete("/delete", adminAuth, deleterecentUpdate)
	.get("/getrecentUpdates", getrecentUpdates);

export default recentUpdateRouter;
