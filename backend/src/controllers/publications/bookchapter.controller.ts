import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";

/**
 * @description Creating book chapter
 * @route POST /api/book-chapter/create
 * @access Private
 */
export const createBookChapter = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			chapterTitle,
			bookTitle,
			authors,
			scopus,
			doi,
			publisher,
			year,
		} = req.body;

		if (!chapterTitle || !bookTitle || !authors || !year || !publisher) {
			throw new AppError(
				"Please provide all required fields: chapterTitle, bookTitle, authors, publisher, year",
				400
			);
		}

		const bookChapter = await prisma.book_Chapter.create({
			data: {
				chapterTitle,
				bookTitle,
				authors,
				scopus,
				doi,
				publisher,
				year,
			},
		});

		response(res, 201, "Book chapter created successfully", {
			bookChapter,
		});
	}
);

/**
 * @description Get all book chapters
 * @route GET /api/book-chapter/get-all
 * @access Public
 */
export const getAllBookChapters = asyncHandler(
	async (req: Request, res: Response) => {
		const bookChapters = await prisma.book_Chapter.findMany();
		response(res, 200, "Book chapters fetched successfully", {
			bookChapters,
		});
	}
);

/**
 * @description Get book chapter by ID
 * @route GET /api/book-chapter/:id
 * @access Public
 */
export const getBookChapterById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const bookChapter = await prisma.book_Chapter.findUnique({
			where: { id: Number(id) },
		});

		if (!bookChapter) {
			throw new AppError("Book chapter not found", 404);
		}

		response(res, 200, "Book chapter fetched successfully", {
			bookChapter,
		});
	}
);

/**
 * @description Update book chapter
 * @route PUT /api/book-chapter/:id
 * @access Private
 */
export const updateBookChapter = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const {
			chapterTitle,
			bookTitle,
			authors,
			scopus,
			doi,
			publisher,
			year,
		} = req.body;

		const bookChapter = await prisma.book_Chapter.update({
			where: { id: Number(id) },
			data: {
				chapterTitle,
				bookTitle,
				authors,
				scopus,
				doi,
				publisher,
				year,
			},
		});

		response(res, 200, "Book chapter updated successfully", {
			bookChapter,
		});
	}
);

/**
 * @description Delete book chapter
 * @route DELETE /api/book-chapter/:id
 * @access Private
 */
export const deleteBookChapter = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const bookChapter = await prisma.book_Chapter.delete({
			where: { id: Number(id) },
		});

		response(res, 200, "Book chapter deleted successfully", {
			bookChapter,
		});
	}
);

/**
 * @description Get all book chapters by user ID
 * @route POST /api/book-chapter/get-all-by-user-id
 * @access Private
 */
export const getAllBookChaptersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const { userId } = req.body;
		const bookChapters = await prisma.book_Chapter.findMany({
			where: {
				authors: {
					some: {
						id: userId,
					},
				},
			},
			orderBy: { createdAt: "desc" },
		});

		if (!bookChapters || bookChapters.length === 0) {
			throw new AppError("No book chapters found for this user", 404);
		}

		response(res, 200, "Book chapters fetched successfully", {
			bookChapters,
		});
	}
);
