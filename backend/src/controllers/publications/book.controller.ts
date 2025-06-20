import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";

/**
 * @description creating a book
 * @route POST /api/book/create
 * @access Private
 */
export const createBook = asyncHandler(async (req: Request, res: Response) => {
	const { title, authors, publisher, scopus, doi, isbn, year } = req.body;

	if (!title || !authors || !year) {
		throw new AppError("Please provide title, authors, and year", 400);
	}

	const book = await prisma.book.create({
		data: { title, authors, publisher, scopus, doi, isbn, year },
	});

	response(res, 201, "Book created successfully", { book });
});

/**
 * @description fetching all books
 * @route GET /api/book/get-all
 * @access Public
 */
export const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
	const books = await prisma.book.findMany();
	response(res, 200, "Books fetched successfully", { books });
});

/**
 * @description fetching a single book by ID
 * @route GET /api/book/:id
 * @access Public
 */
export const getBookById = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params;
	const book = await prisma.book.findUnique({
		where: { id: Number(id) },
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
 */
export const updateBook = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, authors, publisher, scopus, doi, isbn, year } = req.body;

	const book = await prisma.book.update({
		where: { id: Number(id) },
		data: { title, authors, publisher, scopus, doi, isbn, year },
	});

	response(res, 200, "Book updated successfully", { book });
});

/**
 * @description deleting a book by ID
 * @route DELETE /api/book/:id
 * @access Private
 */
export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params;
	const book = await prisma.book.delete({
		where: { id: Number(id) },
	});

	response(res, 200, "Book deleted successfully", { book });
});

/**
 * @description fetching all books by user ID
 * @route POST /api/book/get-all-by-user-id
 * @access Private
 */
export const getAllBooksByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const { userId } = req.body;
		const books = await prisma.book.findMany({
			where: {
				authors: {
					some: {
						id: userId,
					},
				},
			},
			orderBy: { createdAt: "desc" },
		});

		if (!books || books.length === 0) {
			throw new AppError("No books found for this user", 404);
		}

		response(res, 200, "Books fetched successfully", { books });
	}
);
