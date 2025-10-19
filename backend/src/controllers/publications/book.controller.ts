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
			authors: {
				connect: authors.map((authorId: number) => ({ id: authorId })),
			},
			publisher,
			scopus,
			doi,
			isbn,
			year,
		},
		include: {
			authors: {
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					profileImage: true,
					designation: true,
				},
			},
		},
	});

	response(res, 201, "Book created successfully", { book });
});

/**
 * @description fetching all books
 * @route GET /api/book/get-all
 * @access Public
 * @param req
 * @param res
 */
export const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
	const books = await prisma.book.findMany({
		orderBy: {
			createdAt: "desc",
		},
		include: {
			authors: {
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					profileImage: true,
					designation: true,
				},
			},
		},
	});

	for (const book of books) {
		for (const author of book.authors) {
			author.profileImage = author.profileImage
				? await signedUrl(author.profileImage, 3)
				: "";
		}
	}

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
		where: { id: Number(id) },
		include: {
			authors: {
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					profileImage: true,
					designation: true,
				},
			},
		},
	});

	if (!book) {
		throw new AppError("Book not found", 404);
	}
	if (book.authors) {
		for (const author of book.authors) {
			author.profileImage = author.profileImage
				? await signedUrl(author.profileImage, 3)
				: "";
		}
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

	const book = await prisma.book.update({
		where: { id: Number(id) },
		data: {
			title,
			authors: {
				connect: authors.map((authorId: number) => ({ id: authorId })),
			},
			publisher,
			scopus,
			doi,
			isbn,
			year,
		},
		include: {
			authors: {
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					profileImage: true,
					designation: true,
				},
			},
		},
	});
	if (book.authors) {
		for (const author of book.authors) {
			author.profileImage = author.profileImage
				? await signedUrl(author.profileImage, 3)
				: "";
		}
	}
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

	const book = await prisma.book.delete({
		where: { id: Number(id) },
	});

	response(res, 200, "Book deleted successfully", { book });
});

/**
 * @description fetching all books by user ID
 * @route POST /api/book/get-all-by-user-id
 * @access Private
 * @param req
 * @param res
 */
export const getAllBooksByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const userId = req.user?.userId;

		const books = await prisma.book.findMany({
			where: {
				authors: {
					some: {
						id: userId as number,
					},
				},
			},
			orderBy: { createdAt: "desc" },
			include: {
				authors: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					},
				},
			},
		});

		if (!books || books.length === 0) {
			throw new AppError("No books found for this user", 404);
		}
		for (const book of books) {
			for (const author of book.authors) {
				author.profileImage = author.profileImage
					? await signedUrl(author.profileImage, 3)
					: "";
			}
		}
		response(res, 200, "Books fetched successfully", { books });
	}
);
