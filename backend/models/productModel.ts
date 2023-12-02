import mongoose, { Schema, trusted } from "mongoose";
import { productType } from "../types/productType";

const productSchema: Schema<productType> = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    maxlength: 8,
  },
  name: {
    type: String,
    required: true,
    maxlength: 30,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const productModel = mongoose.model<productType>("products", productSchema);
export default productModel;
