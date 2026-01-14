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
	.post("/create", auth, authorizePermission(PERMISSIONS.CREATE_BOOK), createBook)
	.get("/get-all", getAllBooks) // query params: page, limit
	.get("/:id", getBookById)
	.put("/:id", auth, authorizePermission(PERMISSIONS.UPDATE_BOOK), updateBook)
	.delete("/:id",auth, authorizePermission(PERMISSIONS.DELETE_BOOK), deleteBook)
	.get("/get-all-by-user-id", getAllBooksByUserId); // query params: page, limit

export default bookRouter;
