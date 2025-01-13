
import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { addDisLikes, addLikes, addReview, deleteReview, getReviews } from '../controllers/reviewController.js';
const router = express.Router();

router.route('/:productId').get( getReviews );
router.route('/addReview').post( jwtAuthMiddleware, addReview);
router.route('/:reviewId').delete( jwtAuthMiddleware, deleteReview);
// TODO: Create Edit Review Route
router.route('/:reviewId/like').put( jwtAuthMiddleware, addLikes);
router.route('/:reviewId/dislike').put( jwtAuthMiddleware, addDisLikes);

export default router;