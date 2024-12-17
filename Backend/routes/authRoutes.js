
import express from 'express';
import { validateToken } from '../controllers/authController.js';
const router = express.Router();

router.route('/validate').post(validateToken);

export default router;

