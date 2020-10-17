const { Product } = require('../models/product');

const ProductController = {
  getAllQuestions: (product, callback) => {
    const id = product.product_id;
    Product.find({ product_id: id }, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  create: (id, body, callback) => {
    const newProduct = new Product({ product_id: id, results: body });
    newProduct.save((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
};

module.exports = {
  ProductController,
};
