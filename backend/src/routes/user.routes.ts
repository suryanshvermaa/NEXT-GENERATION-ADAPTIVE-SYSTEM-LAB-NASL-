import { Router } from "express";
import { createUser, login, profile } from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
const userRouter = Router();

userRouter
	.post("/createUser", auth, createUser)
	.post("/login", login)
	.get("/profile", auth, profile);

export default userRouter;
