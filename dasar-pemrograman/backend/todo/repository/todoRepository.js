const { Pool } = require('pg');

class TodoRepository {
  constructor(user, host, database, password, port) {
    this.pool = new Pool({
      user: user,
      host: host,
      database: database,
      password: password,
      port: 5432,
    });
  }

  async getAllTodos() {
    const client = await this.pool.connect();
    try {
      const result = await client.query('SELECT * FROM todos');
      return result.rows;
    } finally {
      client.release();
    }
  }

  async addTodo(todo) {
    const client = await this.pool.connect();
    try {
      await client.query(
        'INSERT INTO todos (title, description) VALUES ($1, $2)',
        [todo.title, todo.description]
      );
    } finally {
      client.release();
    }
  }

  async deleteTodoById(id) {
    const client = await this.pool.connect();
    try {
      await client.query('DELETE FROM todos WHERE id = $1', [id]);
    } finally {
      client.release();
    }
  }

  async updateTodoById(id, updatedTodo) {
    const client = await this.pool.connect();
    try {
      await client.query(
        'UPDATE todos SET title = $1, description = $2 WHERE id = $3',
        [updatedTodo.title, updatedTodo.description, id]
      );
    } finally {
      client.release();
    }
  }
}

module.exports = TodoRepository;
