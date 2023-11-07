class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  getAllTodos() {
    return this.todoRepository.getAllTodos();
  }

  addTodo(todo) {
    this.todoRepository.addTodo(todo);
  }

  deleteTodoById(id) {
    this.todoRepository.deleteTodoById(id);
  }

  updateTodoById(id, updatedTodo) {
    this.todoRepository.updateTodoById(id, updatedTodo);
  }
}

module.exports = TodoService;
