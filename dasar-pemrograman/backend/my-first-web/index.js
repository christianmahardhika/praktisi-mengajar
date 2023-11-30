const express = require('express');

const app = express();

app.get('/hello/:id', (req, res) => {
  //   let name = req.query.name;
  let id = req.params.id;
  // using query
  //   res.send('Hello World! ' + name);
  // using params
  res.send('Hello World! ' + id);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
