class TodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }

  getAllTodos(req, res) {
    let result = this.todoService.getAllTodos();
    res.Send(result);
  }

  getTodoById(req, res) {
    let id = req.params.id;
    let result = this.todoService.getTodoById(id);
    res.Send(result);
  }

  addTodo(req, res) {
    let todo = req.body;
    let result = this.todoService.addTodo(todo);
    res.Send(result);
  }

  deleteTodoById(req, res) {
    let id = req.params.id;
    let result = this.todoService.deleteTodoById(id);
    res.Send(result);
  }

  updateTodoById(req, res) {
    let id = req.params.id;
    let result = this.todoService.updateTodoById(id, updatedTodo);
    res.Send(result);
  }
}

module.exports = TodoController;
