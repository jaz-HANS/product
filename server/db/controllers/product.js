const { Product } = require('../models/product');

const ProductController = {
  getProductList: (body, callback) => {
    const max = body.count || 5;
    Product.find((err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    }).setOptions({ limit: max });
  },
  getOneProduct: (id, callback) => {
    Product.find({ _id: id }, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },
  getProductStyles: (id, callback) => {
    Product.find({ _id: id }, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.styles);
      }
    });
  },
  getRelatedProducts: (id, callback) => {
    Product.find({ _id: id }, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.related);
      }
    });
  },
};

module.exports = {
  ProductController,
};
