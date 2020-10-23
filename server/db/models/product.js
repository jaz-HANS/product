const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [
    {
      feature: String,
      value: String,
    },
  ],
  related: [
    Number,
  ],
  styles: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      sale_price: String,
      'default?': Boolean,
      photos: [
        {
          thumbnail_url: String,
          url: String,
        },
      ],
      skus: mongoose.Mixed,
    },
  ],
});

const Product = mongoose.model('Product', ProductSchema, 'product');

module.exports = {
  Product,
};
