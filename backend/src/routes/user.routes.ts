import { Router } from "express";
import { createUser, login, loginWithGoogle, profile } from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
const userRouter = Router();

userRouter
	.post("/createUser", auth, createUser)
	.post("/login", login)
	.get("/profile", auth, profile)
	.post("/loginWithGoogle",loginWithGoogle)

export default userRouter;
