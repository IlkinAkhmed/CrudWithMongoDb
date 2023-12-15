const express = require("express");
const {
  getAllProducts,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
} = require("../Controller/ProductController");

const router = express.Router();

// get all data
router.get("/", getAllProducts);

// get product by id
router.get("/:id", getProductById);

// add product
router.post("", postProduct);

// delete product
router.delete("/:id", deleteProduct);

// update product
router.put("/:id", updateProduct);

module.exports = router;
