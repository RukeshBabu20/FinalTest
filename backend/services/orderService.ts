import orderModel from "../models/orderModel";
import { orderType } from "../types/productType";

export const createService = async (data: orderType) => {
  console.log(data);
  return await orderModel.create(data);
};

export const showService = async () => {
  return await orderModel.find();
};

export const showIdService = async (id: string) => {
  return await orderModel.findById(id);
};

export const updateService = async (id: string, data: orderType) => {
  return await orderModel.findByIdAndUpdate(id, data);
};

export const deleteService = async (id: string) => {
  return await orderModel.findByIdAndDelete(id);
};
