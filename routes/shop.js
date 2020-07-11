const path = require('path');
const routeDir = require('../helpers/path');
const express= require('express');
const { route } = require('./admin');

const router = express.Router();
const shopController = require('../controllers/shop');
const adminData = require('./admin');

router.get('/', shopController.getIndex );

router.get('/products', shopController.getProducts );
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;