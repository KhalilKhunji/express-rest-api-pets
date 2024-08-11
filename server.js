require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
require('./config/database');

const app = express();

const port = process.env.PORT ? process.env.PORT : "3000";

// Middleware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('The server is running!');
});

app.use(express.json());

app.listen(3000, () => {
  console.log('The express app is ready!');
});