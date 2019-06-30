import React, { Component } from "react";
import { TodoConsumer } from "./Todos";
import { ListGroup } from 'reactstrap';

class TodoList extends Component {
    render() {
      return (
        <div>
          <ListGroup className="todo-list">
                <TodoConsumer>{this.props.children}</TodoConsumer>
          </ListGroup>
        </div>
      );
    }
  }
  
  export default TodoList;
