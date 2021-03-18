import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, getAdmin } from '../controller/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAccount);
router.post('/', auth, createAccount);
router.patch('/:id', auth, updateAccount);
router.delete('/:id', auth, deleteAccount);
router.post('/login', auth, loginAccount);
 

export default router;