import { Request, Response } from "express";
import prisma from "../config/db";
import response from "../utils/response";
import { AppError } from "../utils/error";
import asyncHandler from "../utils/asyncHandler";
import { signedUrl } from "../s3";

/**
 *
 * @description Create a new event
 * @route POST /api/event/create
 * @access Private
 * @param req
 * @param res
 */
export const createEvent = asyncHandler(async (req: Request, res: Response) => {
	const { event, description, imageURL } = req.body;
	if (!event || !description || !imageURL) {
		throw new AppError("Please provide all required fields", 400);
	}
	const newEvent = await prisma.event.create({
		data: {
			event,
			description,
			imageURL,
		},
	});
	return response(res, 201, "Event created successfully", {newEvent: {...newEvent, imageURL: await signedUrl(imageURL, 3)}});
});

/**
 *
 * @description Update an existing event
 * @route POST /api/event/update/:id
 * @access Private
 * @param req
 * @param res
 */
export const updateEvent = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { event, description, imageURL } = req.body;
	if (!event || !description || !imageURL) {
		throw new AppError("Please provide all required fields", 400);
	}
	const updatedEvent = await prisma.event.update({
		where: { id: Number(id) },
		data: {
			event,
			description,
			imageURL,
		},
	});
	return response(res, 200, "Event updated successfully", {updatedEvent: {...updatedEvent, imageURL: await signedUrl(imageURL, 3)}});
});

/**
 * *
 * @description Delete an event
 * @route DELETE /api/event/delete/:id
 * @access Private
 * @param req
 * @param res
 *  */
export const deleteEvent = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params;
	const deletedEvent = await prisma.event.delete({
		where: { id: Number(id) },
	});
	return response(res, 200, "Event deleted successfully", deletedEvent);
});

/**
 * *
 * @description Get all events
 * @route GET /api/event/all
 * @access Public
 * @param req
 * @param res
 */
export const getAllEvents = asyncHandler(
	async (req: Request, res: Response) => {
		const events = await prisma.event.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		return response(res, 200, "Events fetched successfully", {events: events.map(async(event) => ({...event, imageURL:await signedUrl(event.imageURL, 3)}))});
	}
);
/**
 * *
 * @description Get a single event by ID
 * @route GET /api/event/:id
 * @access Public
 * @param req
 * @param res
 */
export const getEventById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const event = await prisma.event.findUnique({
			where: { id: Number(id) },
		});
		if (!event) {
			throw new AppError("Event not found", 404);
		}
		return response(res, 200, "Event fetched successfully", {event: {...event, imageURL: await signedUrl(event.imageURL, 3)}});
	}
);
