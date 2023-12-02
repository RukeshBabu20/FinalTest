import mongoose, { Schema, trusted } from "mongoose";
import { orderType } from "../types/productType";

const orderSchema: Schema<orderType> = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderModel = mongoose.model<orderType>("orders", orderSchema);
export default orderModel;
