import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { orderValidation } from './order.validation';
import { productServices } from '../product/product.service';

const saveOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const { productId } = req.body;
    const getProductById = await productServices.getSingleProduct(productId);

    if (!getProductById) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!',
      });
    }
    const quantityOfProduct = getProductById.inventory.quantity;
    const quantityOfOrder = order.quantity;
    // if quantity of order is greater than quantity of product then send invalid order
    if (quantityOfOrder > quantityOfProduct) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    const newQuantity = quantityOfProduct - quantityOfOrder;

    // if new quantity is zero then inStock is false
    if (newQuantity === 0) {
      getProductById.inventory.inStock = false;
      await productServices.updateProductByIdFromDB(productId, getProductById);
    }

    // setting new quantity to the product
    getProductById.inventory.quantity = newQuantity;

    const parsesZodOrderData = orderValidation.parse(order);
    // get the order  result
    const result = await orderServices.saveOrderIntoDB(parsesZodOrderData);
    // update the product
    await productServices.updateProductByIdFromDB(productId, getProductById);
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
