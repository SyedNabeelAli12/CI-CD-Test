// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  console.log("HIT SUCCESS")
  res.send('Welcome to the Node.js environment example!');
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running `);
});
