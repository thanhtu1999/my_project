import express from 'express';

//import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProductType);
router.post('/', auth, createProductType);
router.patch('/:id', auth, updateProductType);
router.delete('/:id', auth, deleteProductType);

export default router;