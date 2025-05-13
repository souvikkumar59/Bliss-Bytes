import express from 'express';
import {
  placeOrder,
  updateOrderStatus,
  getAllOrders,
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', placeOrder);
router.put('/:orderId/status', updateOrderStatus);
router.get('/', getAllOrders);

export default router;
