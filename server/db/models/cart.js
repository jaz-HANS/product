const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  _id: Number,
  user_session: Number,
  product_id: Number,
  active: Boolean,
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = {
  Cart,
};
