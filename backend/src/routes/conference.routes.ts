import {Router} from 'express';
import { createConferencePaper, deleteConferencePaper, getAllConferencePapers, getAllConferencePapersByUserId, getConferencePaperById, updateConferencePaper } from '../controllers/publications/conferencePapers.controller';
import { auth } from '../middlewares/auth.middleware';
const conferenceRouter=Router();

conferenceRouter
.post('/create',auth,createConferencePaper)
.get('/get-all',getAllConferencePapers)
.get('/:id',getConferencePaperById)
.put('/:id',auth,updateConferencePaper)
.delete('/:id',auth,deleteConferencePaper)
.get('/get-all-by-user-id',getAllConferencePapersByUserId)

export default conferenceRouter;