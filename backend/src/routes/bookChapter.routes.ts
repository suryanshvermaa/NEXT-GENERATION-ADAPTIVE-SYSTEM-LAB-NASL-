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
const bookChapterRouter = Router();

bookChapterRouter
	.post("/create", auth, createBookChapter)
	.get("/get-all", getAllBookChapters) // query params: page, limit
	.get("/:id", getBookChapterById)
	.put("/:id", auth, updateBookChapter)
	.delete("/:id", auth, deleteBookChapter)
	.get("/get-all-by-user-id/:userId", getAllBooksByUserId); // query params: userId, page, limit

export default bookChapterRouter;
