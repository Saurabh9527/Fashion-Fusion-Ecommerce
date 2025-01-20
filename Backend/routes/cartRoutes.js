
import express from 'express';
import { addToCart, deleteCartProduct, fetchCartProducts, updateCartProduct } from '../controllers/cartController.js';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
const router = express.Router();

router.route('/').post( jwtAuthMiddleware, addToCart );
router.route('/').get( jwtAuthMiddleware, fetchCartProducts);
router.route('/:productId').put( jwtAuthMiddleware, updateCartProduct);
router.route('/:productId').delete( jwtAuthMiddleware, deleteCartProduct);

export default router;