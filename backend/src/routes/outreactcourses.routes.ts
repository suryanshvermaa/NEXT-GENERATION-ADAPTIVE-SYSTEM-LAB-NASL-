import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import {
	createoutreachorcourses,
	deleteoutreachorcourses,
	getoutreachorcourses,
	getoutreachorcoursesById,
	updateoutreachOrCourses,
} from "../controllers/outreact.controller";
const outreachorcoursesRouter = Router();

outreachorcoursesRouter
	.post("/create", auth, createoutreachorcourses)
	.put("/:id", updateoutreachOrCourses)
	.get("/get-all", getoutreachorcourses) // query : type,page,limit
	.get("/:id", getoutreachorcoursesById)
	.delete("/:id", deleteoutreachorcourses);

export default outreachorcoursesRouter;
