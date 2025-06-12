import { Router } from "express";
import {
	createReasearchArea,
	deleteResearchArea,
	getReasearchAreas,
	getResearchArea,
	updateResearchArea,
} from "../controllers/research/researchAreas.controller";
const researchAreaRouter = Router();

researchAreaRouter
	.post("/createReasearchArea", createReasearchArea)
	.put("/updateResearchArea", updateResearchArea)
	.delete("/deleteResearchArea", deleteResearchArea)
	.get("/getResearchArea", getResearchArea)
	.get("/getReasearchAreas", getReasearchAreas);

export default researchAreaRouter;
