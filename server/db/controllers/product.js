const { Product } = require('../models/product');

const ProductController = {
  getProductList: (body, callback) => {
    const max = body.count || 5;
    Product.find((err, docs) => {
      if (err) {
        callback(err);
      } else {
        callback(null, docs);
      }
    }).setOptions({ limit: max });
  },
  getOneProduct: (id) => Product.findOne({ _id: id }),
  getProductStyles: (id, callback) => {
    Product.findOne({ _id: id }, (err, doc) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, doc.styles);
      }
    });
  },
  getRelatedProducts: (id, callback) => {
    Product.findOne({ _id: id }, (err, doc) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, doc.related);
      }
    });
  },
};

module.exports = {
  ProductController,
};
