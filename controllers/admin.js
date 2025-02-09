const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: false,
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(
        null,
        req.body.title,
        imageUrl,
        description,
        price
    );
    product
        .save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect("/");
    }
    const prodID = req.params.productID;
    Product.findById(prodID, (product) => {
        if (!product) {
            return res.redirect("/");
        }
        res.render("admin/edit-product", {
            pageTitle: "Edit Product",
            path: "/admin/edit-product",
            editing: editMode,
            product: product,
        });
    });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedDesc = req.body.description;
    const updatedImageUrl = req.body.imageUrl;
    const updatedProduct = new Product(
        prodId,
        updatedTitle,
        updatedImageUrl,
        updatedDesc,
        updatedPrice
    );
    updatedProduct.save();
    res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render("admin/product", {
            prods: product,
            pageTitle: "Admin Products",
            path: "/admin/products",
        });
    });
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect("/admin/products");
};
