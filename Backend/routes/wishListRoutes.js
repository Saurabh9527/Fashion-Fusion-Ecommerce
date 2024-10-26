import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { addToWishList, deleteFromWishList, fetchWishListProduct, removeFromWishList } from '../controllers/wishListController.js';
const router = express.Router();

router.route('/').post( jwtAuthMiddleware, addToWishList );
router.route('/').get( jwtAuthMiddleware, fetchWishListProduct );
router.route('/:productId').delete( jwtAuthMiddleware, deleteFromWishList);
router.route('/:productId').post( jwtAuthMiddleware, removeFromWishList);

export default router;