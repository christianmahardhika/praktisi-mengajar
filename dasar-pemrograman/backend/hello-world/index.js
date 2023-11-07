const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/json', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!', 'http://localhost:3000');
});
