
import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { addReview, deleteReview, getReviews } from '../controllers/reviewController.js';
const router = express.Router();

router.route('/:productId').get( getReviews );
router.route('/addReview').post( jwtAuthMiddleware, addReview);
router.route('/:reviewId').delete( jwtAuthMiddleware, deleteReview);
// TODO: Create Edit Review Route

export default router;