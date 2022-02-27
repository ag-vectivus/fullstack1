require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const blogRoutes = require('./routes/blogRoutes');

// MongoDB credentials
const mongoDBURI = process.env.MONGODB_URL;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

// express app
const app = express();
const serverPort = 3000;

// connect to MongoDB
const dbURI = `mongodb+srv://${username}:${password}@${mongoDBURI}`;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(serverPort))
  .catch((err) => console.log(err));

// middleware & static files
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use(blogRoutes);

// 404
app.use((req, res) => {
  res.status(404).send('404');
});
