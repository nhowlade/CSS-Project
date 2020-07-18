const fs = require("filesystem");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //Fetch the produt
    fs.readFile(p, (err, fileContent) => {
      let cart = { produxts: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //Analyse the product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.product[existingProductIndex];
      let updateProduct;
      if (existingProduct) {
        updateProduct = { ...existingProduct };
        updateProduct.qty = updateProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updateProduct;
      } else {
        updateProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updateProduct];
      }
      cart.totalPrice += productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
