import { Router } from "express";
import {
	createProject,
	deleteProject,
	getAllProjects,
	getAllProjectsByUserId,
	getProjectById,
	updateProject,
} from "../controllers/publications/project.controller";
import { auth } from "../middlewares/auth.middleware";
import { get } from "axios";
const projectRouter = Router();

projectRouter
	.get("/get-all", getAllProjects) // query params: page, limit
	.get("/:id", getProjectById)
	.get("/get-all-by-user-id/:userId", getAllProjectsByUserId) // query params: page, limit
	.post("/create", auth, createProject)
	.put("/update/:id", auth, updateProject)
	.delete("/delete/:id", auth, deleteProject);

export default projectRouter;
