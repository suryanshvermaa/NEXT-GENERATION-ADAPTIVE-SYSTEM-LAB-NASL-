import { Router } from "express";
import {
	createUser,
	login,
	loginWithGoogle,
	profile,
	searchingUserByEmail,
	updateProfile,
} from "../controllers/user.controller";
import { adminAuth, auth } from "../middlewares/auth.middleware";
const userRouter = Router();

userRouter
	.post("/createUser", adminAuth, createUser)
	.post("/login", login)
	.get("/profile", auth, profile)
	.post("/loginWithGoogle", loginWithGoogle)
	.put("/updateProfile", auth, updateProfile)
	.get("/search",searchingUserByEmail)

export default userRouter;
