import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { orderValidation } from './order.validation';

const saveOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const parsesZodOrderData = orderValidation.parse(order);
    const result = await orderServices.saveOrderIntoDB(parsesZodOrderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const result = await orderServices.getOrderByEmailFromDB(email);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};
export const orderController = {
  saveOrder,
  getAllOrders,
  getOrderByEmail,
};
