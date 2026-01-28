import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 * @description creating a book
 * @route POST /api/book/create
 * @access Private
 * @param req
 * @param res
 */
export const createBook = asyncHandler(async (req: Request, res: Response) => {
	const {
		title,
		authors,
		publisher = null,
		scopus = null,
		doi = null,
		isbn = null,
		year = null,
	} = req.body;

	if (!title || !authors) {
		throw new AppError("Please provide title, authors, and year", 400);
	}

	const book = await prisma.book.create({
		data: {
			title,
			authors: authors.split(",").map((author:string) => (author.trim())),
			publisher,
			scopus,
			doi,
			isbn,
			year,
			createdBy: req.user!.userId as number,
		},
	});
	await prisma.user.update({
		where:{id:req.user!.userId as number},
		data:{
			books_count:{increment:1}
		}
	})
	response(res, 201, "Book created successfully", { book });
});

/**
 * @description fetching all books
 * @route GET /api/book/get-all?page=&limit=
 * @access Public
 * @param req
 * @param res
 */
export const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
	const { page = "1", limit = "10" } = req.query;
	const skip = (Number(page) - 1) * Number(limit);
	const books = await prisma.book.findMany({
		orderBy: {
			createdAt: "desc",
		},
		skip: skip,
		take: Number(limit),
	});
	response(res, 200, "Books fetched successfully", { books });
});

/**
 * @description fetching a single book by ID
 * @route GET /api/book/:id
 * @access Public
 * @param req
 * @param res
 */
export const getBookById = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.query;
	if (!id) throw new AppError("Please provide id of book", 400);

	const book = await prisma.book.findUnique({
		where: { id: Number(id) }
	});

	if (!book) {
		throw new AppError("Book not found", 404);
	}
	response(res, 200, "Book fetched successfully", { book });
});

/**
 * @description updating a book by ID
 * @route PUT /api/book/:id
 * @access Private
 * @param req
 * @param res
 */
export const updateBook = asyncHandler(async (req: Request, res: Response) => {
	const {
		id,
		title,
		authors,
		publisher = null,
		scopus = null,
		doi = null,
		isbn = null,
		year = null,
	} = req.body;

	if (!id || !title || !authors) {
		throw new AppError("Please provide id, title, authors, and year", 400);
	}
	const existingBook = await prisma.book.findUnique({
		where: { id: Number(id) }
	});
	if (!existingBook) {
		throw new AppError("Book not found", 404);
	}
	if(req.user?.role !== "ADMIN" && existingBook.createdBy !== req.user?.userId) {
		throw new AppError("You are not authorized to update this book", 403);
	}
	const book = await prisma.book.update({
		where: { id: Number(id) },
		data: {
			title,
			authors: authors.split(",").map((author:string) => (author.trim())),
			publisher,
			scopus,
			doi,
			isbn,
			year,
		},
	});
	response(res, 200, "Book updated successfully", { book });
});

/**
 * @description deleting a book by ID
 * @route DELETE /api/book/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params;
	if (!id) throw new AppError("Please provide id of book", 400);
	const existingBook = await prisma.book.findUnique({
		where: { id: Number(id) }
	});
	if (!existingBook) {
		throw new AppError("Book not found", 404);
	}
	if(req.user?.role !== "ADMIN" && existingBook.createdBy !== req.user?.userId) {
		throw new AppError("You are not authorized to delete this book", 403);
	}
	const book = await prisma.book.delete({
		where: { id: Number(id) },
	});
	await prisma.user.update({
		where:{id:req.user!.userId as number},
		data:{
			books_count:{decrement:1}
		}
	})

	response(res, 200, "Book deleted successfully", { book });
});

/**
 * @description fetching all books by user ID
 * @route POST /api/book/get-all-by-user-id/:userId?page=&limit=
 * @access Private
 * @param req
 * @param res
 */
export const getAllBooksByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = "1", limit = "10" } = req.query;
		const skip = (Number(page) - 1) * Number(limit);
		const books = await prisma.book.findMany({
			where: {
				createdBy: Number(req.params.userId)||req.user?.userId as number,
			},
			orderBy: { createdAt: "desc" },
			skip: skip,
			take: Number(limit),
		});
		response(res, 200, "Books fetched successfully", { books });
	}
);
