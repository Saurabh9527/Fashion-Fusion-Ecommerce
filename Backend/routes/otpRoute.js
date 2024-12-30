
import express from 'express';
import { resentOtp, verifyOtp } from '../controllers/otpController.js';
const router = express.Router();

router.route('/verifyOtp').post( verifyOtp )
router.route('/resentOtp').post( resentOtp )

export default router;