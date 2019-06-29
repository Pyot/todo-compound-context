import React, { Component } from "react";
import { TodoConsumer } from "./Todos";

class Item extends Component {
    render() {
        return (
            <li id={this.props.id} className="todo-item">
                <div className={"row"}>
                    <TodoConsumer>{() => this.props.children}</TodoConsumer>
                </div>
            </li>

        );
    }
}

export default Item;
