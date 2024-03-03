import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    images: { type: Array, default: [] },
    fbUrl: { type: String, required: true },
    userIdRegister: {
      type: Number,
      required: true,
    },
    isDelete: { type: Boolean, default: false },
    createdAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
