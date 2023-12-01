var Pool = require('pg-pool');

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5431,
});

exports.pool = pool;
