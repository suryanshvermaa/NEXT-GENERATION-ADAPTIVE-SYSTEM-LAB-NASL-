import { Router } from "express";
import {
	createReasearchArea,
	deleteResearchArea,
	getReasearchAreas,
	getResearchArea,
	updateResearchArea,
} from "../controllers/research/researchAreas.controller";
import { auth } from "../middlewares/auth.middleware";
const researchAreaRouter = Router();

researchAreaRouter
	.post("/createReasearchArea", auth, createReasearchArea)
	.put("/updateResearchArea", auth, updateResearchArea)
	.delete("/deleteResearchArea", auth, deleteResearchArea)
	.get("/getResearchArea", getResearchArea)
	.get("/getReasearchAreas", getReasearchAreas);

export default researchAreaRouter;
