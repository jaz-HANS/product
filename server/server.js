/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const cors = require('cors');

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
