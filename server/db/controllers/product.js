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
};

module.exports = {
  ProductController,
};
