import React, { Component } from "react";
import { TodoConsumer } from "./Todos";

class TodoList extends Component {
    render() {
      return (
        <div>
          <ol className="todo-list">
                <TodoConsumer>{this.props.children}</TodoConsumer>
          </ol>
        </div>
      );
    }
  }
  
  export default TodoList;
