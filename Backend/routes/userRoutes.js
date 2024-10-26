
import express from 'express';
import { login, signup } from '../controllers/userController.js';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
//TODO router.route('/login').post(forgotPassword);
// TODO: create route where user add new address and update existing address

export default router;