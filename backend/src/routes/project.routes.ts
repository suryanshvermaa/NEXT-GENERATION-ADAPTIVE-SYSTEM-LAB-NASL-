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
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const projectRouter = Router();

projectRouter
	.get("/get-all", getAllProjects) // query params: page, limit
	.get("/:id", getProjectById)
	.get("/get-all-by-user-id/:userId", getAllProjectsByUserId) // query params: page, limit
	.post("/create", auth,authorizePermission(PERMISSIONS.CREATE_PROJECT), createProject)
	.put("/update/:id", auth, authorizePermission(PERMISSIONS.UPDATE_PROJECT), updateProject)
	.delete("/delete/:id", auth, authorizePermission(PERMISSIONS.DELETE_PROJECT), deleteProject);

export default projectRouter;
