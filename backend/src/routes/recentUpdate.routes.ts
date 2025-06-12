import { Router } from "express";
import {
	createRecentUpdate,
	deleterecentUpdate,
	getrecentUpdates,
} from "../controllers/notifications/recentHighlight.controller";
import { auth } from "../middlewares/auth.middleware";
const recentUpdateRouter = Router();

recentUpdateRouter
	.post("/create", auth, createRecentUpdate)
	.delete("/delete", auth, deleterecentUpdate)
	.get("/getrecentUpdates", getrecentUpdates);

export default recentUpdateRouter;
