import { Router } from "express";
import {
	createReasearchArea,
	deleteResearchArea,
	getReasearchAreas,
	getResearchArea,
	updateResearchArea,
} from "../controllers/research/researchAreas.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const researchAreaRouter = Router();

researchAreaRouter
	.post("/createReasearchArea",auth,authorizePermission(PERMISSIONS.CREATE_RESEARCH_AREA), createReasearchArea)
	.put("/updateResearchArea", auth, authorizePermission(PERMISSIONS.UPDATE_RESEARCH_AREA), updateResearchArea)
	.delete("/deleteResearchArea", auth, authorizePermission(PERMISSIONS.DELETE_RESEARCH_AREA), deleteResearchArea)
	.get("/getResearchArea", getResearchArea) // query params: id
	.get("/getReasearchAreas", getReasearchAreas); // query params: page, limit

export default researchAreaRouter;
