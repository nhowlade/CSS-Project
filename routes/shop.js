const path = require('path');
const routeDir = require('../helpers/path');
const express= require('express');
const { route } = require('./admin');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop'});
});


module.exports = router;