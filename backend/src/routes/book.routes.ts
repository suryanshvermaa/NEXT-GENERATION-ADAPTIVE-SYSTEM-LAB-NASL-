import {Router} from 'express';
import { createBook, deleteBook, getAllBooks, getAllBooksByUserId, getBookById, updateBook } from '../controllers/publications/book.controller';
import { auth } from '../middlewares/auth.middleware';
const bookRouter=Router();

bookRouter
.post('/create',auth,createBook)
.get('/get-all',getAllBooks)
.get('/:id',getBookById)
.put('/:id',auth,updateBook)
.delete('/:id',deleteBook)
.get('/get-all-by-user-id',getAllBooksByUserId)

export default bookRouter;