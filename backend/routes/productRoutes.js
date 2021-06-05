import express from 'express';
import { getProducts, getProductById, deleteProduct } from '../controllers/productController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById).delete(protect, adminProtect, deleteProduct);

export default router;