import { Request, Response } from 'express';
import { orderServices } from './order.service';

const saveOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderServices.saveOrderIntoDB(order);
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

export const orderController = {
  saveOrder,
};
