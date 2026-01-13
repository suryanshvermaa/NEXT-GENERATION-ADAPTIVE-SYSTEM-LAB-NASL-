import { Router } from "express";
import {
	createResearchFacility,
	deleteResearchFacility,
	getReasearchFacilities,
	getResearchFacility,
	updateResearchFacility,
} from "../controllers/research/researchFacility.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const researchFacilityRouter = Router();

researchFacilityRouter
	.post("/createResearchFacility",auth, authorizePermission(PERMISSIONS.CREATE_RESEARCH_FACILITY), createResearchFacility)
	.put("/updateResearchFacility", auth, authorizePermission(PERMISSIONS.UPDATE_RESEARCH_FACILITY), updateResearchFacility)
	.delete("/deleteResearchFacility", auth, authorizePermission(PERMISSIONS.DELETE_RESEARCH_FACILITY), deleteResearchFacility)
	.get("/getResearchFacility", getResearchFacility) // query params: id
	.get("/getReasearchFacilities", getReasearchFacilities); // query params: page, limit

export default researchFacilityRouter;
