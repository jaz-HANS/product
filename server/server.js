/* eslint-disable no-console */
const express = require('express');
const parser = require('body-parser');
const db = require('./db');

const app = express();
module.exports.app = app;
const PORT = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static('../client/dist'));

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});

module.exports = app;
