import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/save-order', orderController.saveOrder);

export const orderRoutes = router;
