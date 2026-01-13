import { Router } from "express";
import {
	createBookChapter,
	deleteBookChapter,
	getAllBookChapters,
	getBookChapterById,
	updateBookChapter,
} from "../controllers/publications/bookchapter.controller";
import { auth } from "../middlewares/auth.middleware";
import { getAllBooksByUserId } from "../controllers/publications/book.controller";
import { PERMISSIONS } from "../RBAC/permissions";
import { authorizePermission } from "../middlewares/role.middleware";
const bookChapterRouter = Router();

bookChapterRouter
	.post("/create", auth, authorizePermission(PERMISSIONS.CREATE_BOOK_CHAPTER), createBookChapter)
	.get("/get-all", getAllBookChapters) // query params: page, limit
	.get("/:id", getBookChapterById)
	.put("/:id", auth, authorizePermission(PERMISSIONS.UPDATE_BOOK_CHAPTER), updateBookChapter)
	.delete("/:id", auth, authorizePermission(PERMISSIONS.DELETE_BOOK_CHAPTER), deleteBookChapter)
	.get("/get-all-by-user-id/:userId", getAllBooksByUserId); // query params: userId, page, limit

export default bookChapterRouter;
