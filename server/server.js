/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const cors = require('cors');
const { ProductController } = require('./db/controllers/product');
const { CartController } = require('./db/controllers/cart');

const app = express();
const PORT = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('../client/dist'));
app.use(cors());

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port: ${PORT}`);
});

const mongoDB = 'mongodb://127.0.0.1/sdc';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ==========================
// ==== PRODUCTS ROUTES =====
// ==========================

app.get('/products/list', async (req, res) => {
  try {
    const docs = await ProductController.getProductList(req.body);
    res.status(200).send(docs);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/products/:product_id', async (req, res) => {
  try {
    const docs = await ProductController.getOneProduct(req.params.product_id);
    res.status(200).send(docs);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/products/:product_id/styles', async (req, res) => {
  try {
    const docs = await ProductController.getOneProduct(req.params.product_id);
    res.status(200).send(docs.styles);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/products/:product_id/related', async (req, res) => {
  try {
    const docs = await ProductController.getOneProduct(req.params.product_id);
    res.status(200).send(docs.related);
  } catch (err) {
    res.status(404).send(err);
  }
});

// ==========================
// ====== CART ROUTES =======
// ==========================

app.get('/cart/:user_session', (req, res) => {
  CartController.getProductList(req.params.user_session, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
