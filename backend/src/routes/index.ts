import { Router } from "express";
import userRouter from "./user.routes";
import imageRouter from "./image.routes";
import recentUpdateRouter from "./recentUpdate.routes";
import highlightRouter from "./hightlight.routes";
import researchAreaRouter from "./researchArea.routes";
import researchFacilityRouter from "./researchFacility.routes";
import bookRouter from "./book.routes";
import bookChapterRouter from "./bookChapter.routes";
import conferenceRouter from "./conference.routes";
import journalPaperRouter from "./journalPaper.routes";
import projectRouter from "./project.routes";
import patentRouter from "./patent.routes";
import photoGalleryRouter from "./photoGallery.routes";
import eventRouter from "./event.routes";
import publicationRouter from "./publication.routes";
import outreachorcoursesRouter from "./outreactcourses.routes";

const router = Router();

router
	.use("/user", userRouter)
	.use("/image", imageRouter)
	.use("/recentUpdate", recentUpdateRouter)
	.use("/highlight", highlightRouter)
	.use("/researchArea", researchAreaRouter)
	.use("/researchFacility", researchFacilityRouter)
	.use("/book", bookRouter)
	.use("/book-chapter", bookChapterRouter)
	.use("/conference-paper", conferenceRouter)
	.use("/journal-paper", journalPaperRouter)
	.use("/project", projectRouter)
	.use("/patent", patentRouter)
	.use("/photo-gallery", photoGalleryRouter)
	.use("/event", eventRouter)
	.use("/publication", publicationRouter)
	.use("/outreachorcourses", outreachorcoursesRouter)

export default router;
