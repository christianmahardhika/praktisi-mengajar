class TodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }

  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  addTodo(todo) {
    this.todoService.addTodo(todo);
  }

  deleteTodoById(id) {
    this.todoService.deleteTodoById(id);
  }

  updateTodoById(id, updatedTodo) {
    this.todoService.updateTodoById(id, updatedTodo);
  }
}

module.exports = TodoController;
