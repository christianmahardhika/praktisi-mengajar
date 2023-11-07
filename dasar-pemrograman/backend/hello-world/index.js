// Import the express module
const express = require('express');

// Create a new express application
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route handler for the /json path to return some JSON data
app.get('/json', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
const express = require('express');
