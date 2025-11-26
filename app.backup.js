// Import libraries
// const express = require('express');
import express from 'express'

// Define an array of product objects
// const data = require('./models/products.json');
import data from './models/products.json' with { type: 'json' }


// Create an Express application instance
const app = express();
// Define the port for the server
const port = process.env.PORT || 3000; // Use the port provided by the host or default to 3000


// Define a route for HTTP GET requests to the root URL ('/')
// This route sends a simple text response to the client
app.get('/', (req, res) => {
  res.send('RESTful API Demonstration');  // Sends a static response
});

// Middleware to parse JSON requests
app.use(express.json());

// Create (POST) a new item
app.post('/products', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Read (GET) all items
app.get('/products', (req, res) => {
  res.json(data);
});

// Read (GET) a specific item by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    res.json(item);
  }
});

// Update (PUT) an item by ID
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    data[index] = { ...data[index], ...updatedItem };
    res.json(data[index]);
  }
});

// Delete (DELETE) an item by ID
app.delete('/products/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const index = data.findIndex((item) => item.id === id);
      if (index === -1) {
        res.status(404).json({ error: 'Item not found' });
      
      } else {
        // retrieve but do not remove the item
        const deletedItem = data.slice(index, 1);
        res.json(deletedItem[0]);
      }
});


// Start the server on port 3000 and log a message to the console
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});