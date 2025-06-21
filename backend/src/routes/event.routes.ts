import { Router } from "express";
import {
	createEvent,
	updateEvent,
	deleteEvent,
	getAllEvents,
	getEventById,
} from "../controllers/event.controller";
import { adminAuth } from "../middlewares/auth.middleware";

const eventRouter = Router();

eventRouter
	.post("/create", adminAuth, createEvent)
	.put("/update/:id", adminAuth, updateEvent)
	.delete("/delete/:id", adminAuth, deleteEvent)
	.get("/all", getAllEvents)
	.get("/:id", getEventById);

export default eventRouter; 