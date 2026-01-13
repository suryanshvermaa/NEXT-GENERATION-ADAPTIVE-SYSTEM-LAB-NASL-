import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import {
	createoutreachorcourses,
	deleteoutreachorcourses,
	getoutreachorcourses,
	getoutreachorcoursesById,
	updateoutreachOrCourses,
} from "../controllers/outreact.controller";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const outreachorcoursesRouter = Router();

outreachorcoursesRouter
	.post("/create", auth,authorizePermission(PERMISSIONS.CREATE_OUTREACH_OR_COURSES), createoutreachorcourses)
	.put("/:id", auth, authorizePermission(PERMISSIONS.UPDATE_OUTREACH_OR_COURSES), updateoutreachOrCourses)
	.get("/get-all", getoutreachorcourses) // query : type,page,limit
	.get("/:id", getoutreachorcoursesById)
	.delete("/:id", auth, authorizePermission(PERMISSIONS.DELETE_OUTREACH_OR_COURSES), deleteoutreachorcourses);
export default outreachorcoursesRouter;
