
import express from 'express';
import { addProduct, fetchProduct } from '../controllers/productsController.js';
const router = express.Router()

router.route('/add').post(addProduct)
router.route('/').get(fetchProduct)

export default router;