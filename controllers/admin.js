const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll (product => {
        res.render('admin/product', {prods: product , pageTitle: 'Admin Products', path: '/admin/products'});
    })
}