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
const patentRouter = Router();

patentRouter
	.post("/create", auth, createPatent)
	.get("/get-all", getAllPatents)
	.get("/:id", getPatentById)
	.put("/:id", auth, updatePatent)
	.delete("/:id", auth, deletePatent)
	.get("/get-all-by-user-id", getAllPatentsByInventorId);

export default patentRouter;
