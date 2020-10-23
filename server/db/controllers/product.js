const { Product } = require('../models/product');

const ProductController = {
  getProductList: (body) => {
    const max = body.count || 5;
    return Product.find().setOptions({ limit: max });
  },
  getOneProduct: (id) => Product.findOne({ _id: id }),
};

module.exports = {
  ProductController,
};
