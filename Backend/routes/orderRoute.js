
import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { addOrders, fetchOrders } from '../controllers/orderController.js';
const router = express.Router();

router.route('/').get( jwtAuthMiddleware, fetchOrders ); //fetch all orders GET request
router.route('/addOrder').post( jwtAuthMiddleware, addOrders );
//save order routes POST request
//fetch particular order details GET request
export default router;