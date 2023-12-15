const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
} = require("../Controller/ProductController");



router.get("", getAllProducts);
router.get("/:id", getProductById);
router.post("", postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
