const path = require("path");
const routeDir = require("../helpers/path");
const express = require("express");
const { route } = require("./admin");

const router = express.Router();
const shopController = require("../controllers/shop");
const adminData = require("./admin");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

router.post("/cart", shopController.postCart);

module.exports = router;
