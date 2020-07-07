const path = require('path');
const routeDir = require('../helpers/path');
const express= require('express');
const { route } = require('./admin');

const router = express.Router();
const productsController = require('../controllers/products');
const adminData = require('./admin');

router.get('/', productsController.getProduct );


module.exports = router;