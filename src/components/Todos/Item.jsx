import React, { Component } from "react";
import { TodoConsumer } from "./Todos";

class Item extends Component {
  render() {
    return (
        <li id={this.props.id} className="todo-list">
          <TodoConsumer>{() => this.props.children}</TodoConsumer>
        </li>
     
    );
  }
}

export default Item;
