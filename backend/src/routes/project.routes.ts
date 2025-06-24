import { Router } from "express";
import {
	createProject,
	deleteProject,
	getAllProjects,
	getAllProjectsByPiId,
	getProjectById,
	updateProject,
} from "../controllers/publications/project.controller";
import { auth } from "../middlewares/auth.middleware";
const projectRouter = Router();

projectRouter
	.get("/get-all", getAllProjects)
	.get("/:id", getProjectById)
	.get("/get-all-by-pi/:piId", getAllProjectsByPiId)
	.post("/create", auth, createProject)
	.put("/update/:id", auth, updateProject)
	.delete("/delete/:id", auth, deleteProject);

export default projectRouter;
