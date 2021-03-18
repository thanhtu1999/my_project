import express from 'express';

//import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCart);
router.post('/', auth, createCart);
router.patch('/:id', auth, updateCart);
router.delete('/:id', auth, deleteCart);

export default router;