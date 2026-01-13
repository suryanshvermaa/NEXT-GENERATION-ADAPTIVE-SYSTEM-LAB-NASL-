import { Router } from "express";
import {
	createEvent,
	updateEvent,
	deleteEvent,
	getAllEvents,
	getEventById,
} from "../controllers/event.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";

const eventRouter = Router();

eventRouter
	.post("/create",auth, authorizePermission(PERMISSIONS.CREATE_EVENT), createEvent)
	.put("/update/:id", auth, authorizePermission(PERMISSIONS.UPDATE_EVENT), updateEvent)
	.delete("/delete/:id", auth, authorizePermission(PERMISSIONS.DELETE_EVENT), deleteEvent)
	.get("/all", getAllEvents) // query params: page, limit
	.get("/:id", getEventById);

export default eventRouter;
