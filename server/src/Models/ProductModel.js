const mongoose = require("mongoose");
const { Schema } = mongoose;


const productsSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);


exports.Products = mongoose.model("Products", productsSchema);
