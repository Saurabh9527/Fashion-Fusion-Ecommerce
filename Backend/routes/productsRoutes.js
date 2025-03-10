
import express from 'express';
import { addProduct, fetchProduct, getProduct, getSimillarProduct, searchProduct } from '../controllers/productsController.js';
const router = express.Router()

router.route('/add').post(addProduct);
router.route('/').get(fetchProduct);
router.route('/search').get(searchProduct);
router.route('/getSimillarProduct').get(getSimillarProduct);
router.route('/:prodId').get(getProduct);
export default router;