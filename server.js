require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
require('./config/database');
const cors = require('cors');

const app = express();

const port = process.env.PORT ? process.env.PORT : "3000";

const petRouter = require('./controllers/pets.js');

// Middleware
app.use(morgan('dev'));

app.use(express.json());

app.use('/pets', petRouter);

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.listen(3000, () => {
  console.log('The express app is ready!');
});