import express from 'express';

//import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getOrder);
router.post('/', auth, createOrder);
router.patch('/:id', auth, updateOrder);
router.delete('/:id', auth, deleteOrder);

export default router;