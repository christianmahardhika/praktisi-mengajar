const express = require('express');
const bodyParser = require('body-parser');
const TodoRepository = require('./repository/todoRepository');
const TodoService = require('./service/todoService');
const TodoController = require('./controller/todoController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Repository
const todoRepository = new TodoRepository(
  'postgres',
  'localhost',
  'todo',
  'postgres',
  5432
);

// Service
const todoService = new TodoService(todoRepository);

// Controller
const todoController = new TodoController(todoService);

// Routes
app.get('/todos', todoController.getAllTodos);
app.get('/todos/:id', todoController.getTodoById);
app.post('/todos', todoController.addTodo);
app.put('/todos/:id', todoController.updateTodoById);
app.delete('/todos/:id', todoController.deleteTodoById);

// Start server
app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
