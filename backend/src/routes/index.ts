import { Router } from "express";
import userRouter from "./user.routes";
import imageRouter from "./image.routes";
const router = Router();

router.use("/user", userRouter);
router.use("/image", imageRouter);

export default router;
