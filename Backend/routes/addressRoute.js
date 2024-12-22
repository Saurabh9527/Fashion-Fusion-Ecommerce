
import express from 'express';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { addNewAddress, deleteAddress, fetchAllAddress, updateAddress } from '../controllers/addressController.js';
const router = express.Router();

router.route('/fetchAddress').get( jwtAuthMiddleware, fetchAllAddress );
router.route('/addNewAddress').post( jwtAuthMiddleware, addNewAddress );
router.route('/updateAddress/:addressId').patch( jwtAuthMiddleware, updateAddress );
router.route('/deleteAddress/:addressId').delete( jwtAuthMiddleware, deleteAddress );


export default router;