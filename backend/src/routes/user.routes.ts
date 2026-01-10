import { Router } from "express";
import {
	createUser,
	getPeople,
	getProfileById,
	login,
	loginWithGoogle,
	profile,
	searchingUserByEmail,
	updateProfile,
} from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
import { authorizePermission } from "../middlewares/role.middleware";
import { PERMISSIONS } from "../config/roles";
const userRouter = Router();

userRouter
	.post("/createUser", auth,authorizePermission(PERMISSIONS.CREATE_USER), createUser)
	.post("/login", login)
	.get("/profile", auth,authorizePermission(PERMISSIONS.FETCH_PROFILE), profile)
	.post("/loginWithGoogle", loginWithGoogle)
	.put("/updateProfile", auth,authorizePermission(PERMISSIONS.UPDATE_PROFILE), updateProfile)
	.get("/search", searchingUserByEmail)
	.get("/getPeople", getPeople)
	.get("/profile/:userId", getProfileById);

export default userRouter;
