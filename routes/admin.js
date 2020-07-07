const path = require('path');

const express= require('express');

const productsController = require('../controllers/products');

const products = [];
const routeDir = require('../helpers/path');
const { title } = require('process');
const router = express.Router();

router.get ('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;