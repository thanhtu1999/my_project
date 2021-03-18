import express from 'express';

//import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/', auth, createProduct);
router.patch('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

export default router;