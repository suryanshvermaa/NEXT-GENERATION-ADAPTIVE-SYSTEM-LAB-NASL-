import { Router } from "express";
import {
	createResearchFacility,
	deleteResearchFacility,
	getReasearchFacilities,
	getResearchFacility,
	updateResearchFacility,
} from "../controllers/research/researchFacility.controller";
import { auth } from "../middlewares/auth.middleware";
const researchFacilityRouter = Router();

researchFacilityRouter
	.post("/createResearchFacility", auth, createResearchFacility)
	.put("/updateResearchFacility", auth, updateResearchFacility)
	.delete("/deleteResearchFacility", auth, deleteResearchFacility)
	.get("/getResearchFacility", getResearchFacility)
	.get("/getReasearchFacilities", getReasearchFacilities);

export default researchFacilityRouter;
