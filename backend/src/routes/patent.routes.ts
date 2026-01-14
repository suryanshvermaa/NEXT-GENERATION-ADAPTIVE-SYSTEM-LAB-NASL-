import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import {
	createPatent,
	deletePatent,
	getAllPatents,
	getAllPatentsByInventorId,
	getPatentById,
	updatePatent,
} from "../controllers/publications/patent.controller";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const patentRouter = Router();

patentRouter
	.post("/create", auth,authorizePermission(PERMISSIONS.CREATE_PATENT), createPatent)
	.get("/get-all", getAllPatents) // query params: page, limit
	.get("/:id", getPatentById)
	.put("/:id", auth, authorizePermission(PERMISSIONS.UPDATE_PATENT), updatePatent)
	.delete("/:id", auth, authorizePermission(PERMISSIONS.DELETE_PATENT), deletePatent)
	.get("/get-all-by-user-id/:userId", getAllPatentsByInventorId); // query params: page, limit

export default patentRouter;
