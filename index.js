// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware as
app.use(express.json());


// Routes Check
app.get('/', (req, res) => {
  console.log("API HIT SUCCESS")
  res.send('Welcome to the Node.js environment example!');
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running `);
});
