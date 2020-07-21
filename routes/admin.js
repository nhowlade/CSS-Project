const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const products = [];
const routeDir = require("../helpers/path");
const { title } = require("process");
const router = express.Router();

router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProducts);

router.get("/edit-product/:productID", adminController.getEditProduct);

router.get("/edit-product");
module.exports = router;
