import { Router } from "express";
import {
	createReasearchArea,
	deleteResearchArea,
	getReasearchAreas,
	getResearchArea,
	updateResearchArea,
} from "../controllers/research/researchAreas.controller";
import { adminAuth } from "../middlewares/auth.middleware";
const researchAreaRouter = Router();

researchAreaRouter
	.post("/createReasearchArea", adminAuth, createReasearchArea)
	.put("/updateResearchArea", adminAuth, updateResearchArea)
	.delete("/deleteResearchArea", adminAuth, deleteResearchArea)
	.get("/getResearchArea", getResearchArea)
	.get("/getReasearchAreas", getReasearchAreas);

export default researchAreaRouter;
