const { Cart } = require('../models/cart');

const CartController = {
  getProductList: (session, callback) => {
    Cart.find({ user_session: session }, (err, docs) => {
      if (err) {
        callback(err);
      } else {
        callback(null, docs);
      }
    });
  },
};

module.exports = {
  CartController,
};
