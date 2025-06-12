import { Router } from "express";
import userRouter from "./user.routes";
import imageRouter from "./image.routes";
import recentUpdateRouter from "./recentUpdate.routes";
import highlightRouter from "./hightlight.routes";
import researchAreaRouter from "./researchArea.routes";
import researchFacilityRouter from "./researchFacility.routes";
const router = Router();

router
	.use("/user", userRouter)
	.use("/image", imageRouter)
	.use("/recentUpdate", recentUpdateRouter)
	.use("/highlight", highlightRouter)
	.use("/researchArea", researchAreaRouter)
	.use("/researchFacility", researchFacilityRouter);

export default router;
