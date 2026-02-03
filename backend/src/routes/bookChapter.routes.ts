import { Router } from "express";
import {
	createBookChapter,
	deleteBookChapter,
	getAllBookChapters,
	getAllBookChaptersByUserId,
	getBookChapterById,
	updateBookChapter,
} from "../controllers/publications/bookchapter.controller";
import { auth } from "../middlewares/auth.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
import { authorizePermission } from "../middlewares/role.middleware";
const bookChapterRouter = Router();

bookChapterRouter
	.post("/create", auth, createBookChapter)
	.get("/get-all", getAllBookChapters) // query params: page, limit
	.get("/:id", getBookChapterById)
	.put("/:id", auth, updateBookChapter)
	.delete("/:id", auth, deleteBookChapter)
	.get("/get-all-by-user-id/:userId", getAllBookChaptersByUserId); // query params: page, limit

export default bookChapterRouter;
