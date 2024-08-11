require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
require('./config/database');

const app = express();

const port = process.env.PORT ? process.env.PORT : "3000";

const petRouter = require('./controllers/pets.js');

// Middleware
app.use(morgan('dev'));

app.use(express.json());

app.use('/pets', petRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});