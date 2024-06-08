import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// save order
router.post('/save-order', orderController.saveOrder);

// get all orders
router.get('/', orderController.getAllOrders);

// get orders by email
router.get('/:email', orderController.getOrderByEmail);

export const orderRoutes = router;
