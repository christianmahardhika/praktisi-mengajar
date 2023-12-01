const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const app = express();

app.use(bodyParser.json()); // for parsing application/json

app.get('/hello/:id', (req, res) => {
  //   let name = req.query.name;
  let id = req.params.id;
  // using query
  //   res.send('Hello World! ' + name);
  // using params
  res.send('Hello World! ' + id);
});
app.get('/hello', (req, res) => {
  let name = req.query.name;
  // let id = req.params.id;
  //using query
  res.send('Hello World! ' + name);
  // // using params
  // res.send('Hello World! ' + id);
});

app.get('/json', (req, res) => {
  res.json({
    name: 'John Doe',
    address: 'Jakarta',
  });
});

app.post('/register', (req, res) => {
  let jsonParser = req.body;

  // Javascript logic
  db.pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [jsonParser.username, jsonParser.password],
      (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
      }
    );
  });

  return res.json(jsonParser);
});

app.post('/login', (req, res) => {
  let jsonBody = req.body; // choose one of these
  const { username, password } = req.body; // choose one of these
  console.log('Username: ', username);
  console.log('Password: ', password);
  console.log('Username: ', jsonBody.username);
  console.log('Password: ', jsonBody.password);

  // Javascript logic
  if (jsonBody.username === 'admin' && jsonBody.password === 'admin') {
    return res.json({
      message: 'Login success',
    });
  }
  // end of Javascript logic

  return res.json({
    message: 'Login failed',
  });
});

app.put('/update', (req, res) => {
  let jsonParser = req.body;
  console.log(jsonParser);
  return res.json(jsonParser);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
