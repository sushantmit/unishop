import express from 'express';
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, adminProtect, createProduct);
router.route('/:id').get(getProductById).delete(protect, adminProtect, deleteProduct).put(protect, adminProtect, updateProduct);

export default router;