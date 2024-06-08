import { TOrder } from './order.interface';
import { orderModel } from './order.model';

const saveOrderIntoDB = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await orderModel.find();
  return result;
};
// get order  from db by email
const getOrderByEmailFromDB = async (email: string) => {
  const result = await orderModel.find({ email });
  return result;
};

export const orderServices = {
  saveOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
