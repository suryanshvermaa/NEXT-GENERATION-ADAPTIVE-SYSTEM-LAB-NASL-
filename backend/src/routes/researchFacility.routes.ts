import { Router } from "express";
import {
	createResearchFacility,
	deleteResearchFacility,
	getReasearchFacilities,
	getResearchFacility,
	updateResearchFacility,
} from "../controllers/research/researchFacility.controller";
import { adminAuth } from "../middlewares/auth.middleware";
const researchFacilityRouter = Router();

researchFacilityRouter
	.post("/createResearchFacility", adminAuth, createResearchFacility)
	.put("/updateResearchFacility", adminAuth, updateResearchFacility)
	.delete("/deleteResearchFacility", adminAuth, deleteResearchFacility)
	.get("/getResearchFacility", getResearchFacility)
	.get("/getReasearchFacilities", getReasearchFacilities);

export default researchFacilityRouter;
