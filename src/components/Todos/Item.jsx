import React, { Component } from "react";
import { TodoConsumer } from "./Todos";
import { ListGroupItem } from 'reactstrap';

class Item extends Component {
    render() {
        return (
            <ListGroupItem id={this.props.id} className="todo-item d-flex align-items-center">
                <TodoConsumer>{() => this.props.children}</TodoConsumer>
            </ListGroupItem>

        );
    }
}

export default Item;
