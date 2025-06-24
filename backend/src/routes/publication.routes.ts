import {Router} from 'express';
import { auth } from '../middlewares/auth.middleware';
import { createPublication, deletePublication, getAllPublicationsByAuthorId, getPublicationById, getPublications, updatePublication } from '../controllers/publications/publication.controller';
const publicationRouter=Router();

publicationRouter
.post('/create',auth,createPublication)
.put("/:id",updatePublication)
.get("/get-all",getPublications)
.get("/:id",getPublicationById)
.delete("/:id",deletePublication)
.get("/get-all-by-authorId/:authorId/:type",getAllPublicationsByAuthorId)

export default publicationRouter;