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
      skus: {
        'One Size': Number,
        XS: Number,
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
        XXL: Number,
        7: Number,
        7.5: Number,
        8: Number,
        8.5: Number,
        9: Number,
        9.5: Number,
        10: Number,
        10.5: Number,
        11: Number,
        11.5: Number,
        12: Number,
      },
    },
  ],
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
  Product,
};
