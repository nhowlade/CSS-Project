const path = require('path');

const express= require('express');

const products = [];
const routeDir = require('../helpers/path');
const { title } = require('process');
const router = express.Router();

router.get ('/add-product', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;