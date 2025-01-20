
import express from 'express';
import { forgotPassword, login, signup } from '../controllers/userController.js';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/updatePassword').post(forgotPassword);

export default router;