import {Router} from 'express';
import { auth } from '../middlewares/auth.middleware';
import { createJournalPaper, deleteJournalPaperById, getAllJournalPaper, getJounalPapersByUserId, getJournalPaperById, updateJournalPaper } from '../controllers/publications/journalPaper.controller';
const journalPaperRouter=Router();

journalPaperRouter
.post('/create',auth,createJournalPaper)
.get('/get-all',getAllJournalPaper)
.get('/:id',getJournalPaperById)
.put('/:id',auth,updateJournalPaper)
.delete('/:id',auth,deleteJournalPaperById)
.get('/get-all-by-user-id',getJounalPapersByUserId)

export default journalPaperRouter;