
import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { fetchOrders } from '../controllers/orderController.js';
const router = express.Router();

router.route('/fetchOrders').get( jwtAuthMiddleware, fetchOrders );

export default router;