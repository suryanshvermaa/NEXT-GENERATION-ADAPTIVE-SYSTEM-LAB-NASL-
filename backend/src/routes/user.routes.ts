import { Router } from "express";
import { createUser, login, profile } from "../controllers/user.controller";
const userRouter = Router();

userRouter
	.post("/createUser", createUser)
	.post("/login", login)
	.get("/profile", profile);

export default userRouter;
