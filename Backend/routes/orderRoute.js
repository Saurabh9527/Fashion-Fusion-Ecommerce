
import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { addOrders, createRazorpayOrder, fetchOrders, getOrderDetails, verifyRazorpayPayment } from '../controllers/orderController.js';
const router = express.Router();

// Order-related routes
router.route('/').get( jwtAuthMiddleware, fetchOrders ); 
router.route('/getOrderDetails/:orderId').get( jwtAuthMiddleware, getOrderDetails ); 
router.route('/addOrder').post( jwtAuthMiddleware, addOrders );
// TODO: fetch particular order details GET request

// Razorpay payment routes
router.route('/razorpay-order').post( jwtAuthMiddleware, createRazorpayOrder );
router.route('/razorpay-payment-verify').post( jwtAuthMiddleware, verifyRazorpayPayment );
export default router;