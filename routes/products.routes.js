import express from "express";

import {
  listProducts,
  getProduct,
  editProduct,
  addProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/", listProducts);

router.get("/:id", getProduct);

router.put("/:id", editProduct);

router.post("/", addProduct);

router.delete("/:id", deleteProduct);

export default router;
