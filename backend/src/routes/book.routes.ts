import { Router } from "express";
import {
	createBook,
	deleteBook,
	getAllBooks,
	getAllBooksByUserId,
	getBookById,
	updateBook,
} from "../controllers/publications/book.controller";
import { auth } from "../middlewares/auth.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
import { authorizePermission } from "../middlewares/role.middleware";
const bookRouter = Router();

bookRouter
	.post("/create", auth, createBook)
	.get("/get-all", getAllBooks) // query params: page, limit
	.get("/get-all-by-user-id/:userId?", getAllBooksByUserId) // params: userId (optional), query params: page, limit
	.get("/:id", getBookById)
	.put("/:id", auth, updateBook)
	.delete("/:id",auth, deleteBook)
	;

export default bookRouter;
