import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 *
 * @description creating book chapter
 * @route POST /api/book-chapter/create
 * @access Private
 * @param req
 * @param res
 */
export const createBookChapter = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			chapterTitle,
			bookTitle,
			authors,
			scopus = null,
			doi = null,
			publisher = null,
			year = null,
		} = req.body;

		if (!chapterTitle || !bookTitle || !authors)
			throw new AppError(
				"Please provide all required fields: chapterTitle, bookTitle, authors, publisher, year",
				400
			);

		const bookChapter = await prisma.book_Chapter.create({
			data: {
				chapterTitle,
				bookTitle,
				authors: authors.split(",").map((author:string) => (author.trim())),
				scopus,
				doi,
				publisher,
				year,
				createdBy: req.user!.userId as number,
			},
		});

		response(res, 201, "Book chapter created successfully", {
			bookChapter,
		});
	}
);

/**
 *
 * @description updating book chapter
 * @route PUT /api/book-chapter/:id
 * @access Private
 * @param req
 * @param res
 */
export const updateBookChapter = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const {
			chapterTitle,
			bookTitle,
			authors,
			scopus = null,
			doi = null,
			publisher = null,
			year = null,
		} = req.body;

		if (
			!id ||
			!chapterTitle ||
			!bookTitle ||
			!authors ||
			!publisher ||
			!year
		)
			throw new AppError(
				"Please provide all required fields: id, chapterTitle, bookTitle, authors, publisher, year",
				400
			);
		const existingBookChapter = await prisma.book_Chapter.findUnique({
			where: { id: Number(id) },
		});
		if (!existingBookChapter) {
			throw new AppError("Book chapter not found", 404);
		}
		if(req.user?.role !== "ADMIN" && existingBookChapter.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to update this book chapter", 403);
		}
		const bookChapter = await prisma.book_Chapter.update({
			where: { id: Number(id) },
			data: {
				chapterTitle,
				bookTitle,
				authors: authors.split(",").map((author:string) => (author.trim())),
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
 *
 * @description fetching all book chapters
 * @route GET /api/book-chapter/get-all?page=&limit=
 * @access Public
 * @param req
 * @param res
 */
export const getAllBookChapters = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = 1, limit = 10 } = req.query;
		const skip = (Number(page) - 1) * Number(limit);
		const bookChapters = await prisma.book_Chapter.findMany({
			orderBy: { createdAt: "desc" },
			skip: skip,
			take: Number(limit)
		});
		response(res, 200, "Book chapters fetched successfully", {
			bookChapters,
		});
	}
);

/**
 *
 * @description fetching book chapter by id
 * @route GET /api/book-chapter/:id
 * @access Public
 * @param req
 * @param res
 */
export const getBookChapterById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of book chapter", 400);
		const bookChapter = await prisma.book_Chapter.findUnique({
			where: { id: Number(id) }
		});
		if (!bookChapter) throw new AppError("Book chapter not found", 404);
		response(res, 200, "Book chapter fetched successfully", {
			bookChapter,
		});
	}
);

/**
 *
 * @description deleting book chapter by id
 * @route DELETE /api/book-chapter/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteBookChapter = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of book chapter", 400);
		const existingBookChapter = await prisma.book_Chapter.findUnique({
			where: { id: Number(id) },
		});
		if (!existingBookChapter) {
			throw new AppError("Book chapter not found", 404);
		}
		if(req.user?.role !== "ADMIN" && existingBookChapter.createdBy !== req.user?.userId) {
			throw new AppError("You are not authorized to delete this book chapter", 403);
		}
		const bookChapter = await prisma.book_Chapter.delete({
			where: { id: Number(id) },
		});

		response(res, 200, "Book chapter deleted successfully", {
			bookChapter,
		});
	}
);

/**
 *
 * @description fetching all book chapters by user id
 * @route GET /api/book-chapter/get-all-by-user-id?page=&limit=
 * @access Private
 * @param req
 * @param res
 */
export const getAllBookChaptersByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.user?.userId;
		const { page = 1, limit = 10 } = req.query;
		const skip = (Number(page) - 1) * Number(limit);
		if (!userId) throw new AppError("User id is required", 400);
		const bookChapters = await prisma.book_Chapter.findMany({
			where: {
				createdBy: userId as number,
			},
			skip: skip,
			take: Number(limit)
		});
		response(res, 200, "Book chapters fetched successfully", {
			bookChapters,
		});
	}
);
