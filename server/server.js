/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const cors = require('cors');
const { ProductController } = require('./db/controllers/product');

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

app.get('/products/list', (req, res) => {
  ProductController.getProductList(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/products/:product_id', (req, res) => {
  ProductController.getOneProduct(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/products/:product_id/styles', (req, res) => {
  ProductController.getProductStyles(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/products/:product_id/related', (req, res) => {
  ProductController.getRelatedProducts(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
