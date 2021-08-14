import React, { Component } from "react";
import Todos from "./Todos.js";
import AddTodos from "./AddTodo.js";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play mario kart" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random() * 20;
	let todos = [...this.state.todos, todo];
	this.setState({
		todos: todos
	});
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;
