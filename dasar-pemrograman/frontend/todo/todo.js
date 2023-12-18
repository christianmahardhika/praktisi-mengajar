// Get todo list
function getTodoList() {
  // fetch todo by axios
  axios
    .get('http://localhost:3000/todos')
    .then((response) => {
      response.data.forEach((todo) => {
        document.getElementById('todo-list').innerHTML += `
        <li>${todo.title}</li>
      `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Get todo by id
function getTodoById(id) {
  // fetch todo by id using axios
  axios
    .get(`http://localhost:3000/todos/${id}`)
    .then((response) => {
      document.getElementById('todo-list').innerHTML += `
            <li>${response.data.title}</li>
        `;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Update todo
function updateTodo(todo) {
  // update todo by id using axios
  axios
    .put(`http://localhost:3000/todos`, todo)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Create todo
function createTodo(todo) {
  // TODO: Implement logic to create todo
}

// Delete todo
function deleteTodo(id) {
  // TODO: Implement logic to delete todo
}

// TODO: Add event listeners and implement the functionality

// Example usage:
// getTodoList();
// getTodoById(1);
// updateTodo(1, "Updated todo");
// createTodo("New todo");
// deleteTodo(1);
