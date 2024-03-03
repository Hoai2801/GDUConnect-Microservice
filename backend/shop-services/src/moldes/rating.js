import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ratingSchema = new Schema(
  {
    comment: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    images: { type: Array, default: [] },
    userId: { type: Number, required: true },
    productId: {
      type: Schema.Types.ObjectId,
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

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
