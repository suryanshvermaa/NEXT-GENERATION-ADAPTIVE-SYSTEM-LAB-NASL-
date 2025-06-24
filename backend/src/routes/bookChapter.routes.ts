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
	.get("/get-all", getAllBookChapters)
	.get("/:id", getBookChapterById)
	.put("/:id", auth, updateBookChapter)
	.delete("/:id", deleteBookChapter)
	.get("/get-all-by-user-id", getAllBooksByUserId);

export default bookChapterRouter;
