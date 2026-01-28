import { Router } from "express";
import {
	createUser,
	getPeopleByDesignation,
	login,
	loginWithGoogle,
	profile,
	searchingUserByEmail,
	updateProfile,
} from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../RBAC/permissions";
const userRouter = Router();

userRouter
	.post("/createUser", auth,authorizePermission(PERMISSIONS.CREATE_USER), createUser)
	.post("/login", login)
	.post("/loginWithGoogle", loginWithGoogle)
	.put("/updateProfile", auth, updateProfile)
	.get("/search", searchingUserByEmail) // query param: query
	.get("/getPeople", getPeopleByDesignation) // query param: designation, page, limit
	.get("/profile/:userId", profile); // param: userId - Public route

export default userRouter;
