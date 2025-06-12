import { Router } from "express";
import {
	createResearchFacility,
	deleteResearchFacility,
	getReasearchFacilities,
	getResearchFacility,
	updateResearchFacility,
} from "../controllers/research/researchFacility.controller";
const researchFacilityRouter = Router();

researchFacilityRouter
	.post("/createResearchFacility", createResearchFacility)
	.put("/updateResearchFacility", updateResearchFacility)
	.delete("/deleteResearchFacility", deleteResearchFacility)
	.get("/getResearchFacility", getResearchFacility)
	.get("/getReasearchFacilities", getReasearchFacilities);

export default researchFacilityRouter;
