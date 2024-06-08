import { TOrder } from './order.interface';
import { orderModel } from './order.model';

const saveOrderIntoDB = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

export const orderServices = {
  saveOrderIntoDB,
};
