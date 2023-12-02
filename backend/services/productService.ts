import productModel from "../models/productModel";
import { productType } from "../types/productType";

export const createService = async (data: productType) => {
  return await productModel.create(data);
};

export const showService = async () => {
  return await productModel.find();
};

export const showIdService = async (id: string) => {
  return await productModel.findById(id);
};

export const updateService = async (id: string, data: productType) => {
  return await productModel.findByIdAndUpdate(id, data);
};

export const deleteService = async (id: string) => {
  return await productModel.findByIdAndDelete(id);
};
