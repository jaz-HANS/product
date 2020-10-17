const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/sdc';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: Number,
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
      'default?': Number,
      photos: [
        {
          thumbnail_url: String,
          url: String,
        },
      ],
      skus: {
        XS: Number,
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
        XXL: Number,
        7: Number,
        8: Number,
        9: Number,
        10: Number,
        11: Number,
        12: Number,
        7.5: Number,
        8.5: Number,
        9.5: Number,
        10.5: Number,
        11.5: Number,
      },
    },
  ],
});