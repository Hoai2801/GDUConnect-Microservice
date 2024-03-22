import mongoose from "mongoose";

const Schema = mongoose.Schema;
const optionSchema = new Schema({
  option: [
    {
      type: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
});

const Option = mongoose.model("Option", optionSchema);
module.exports = Option;
