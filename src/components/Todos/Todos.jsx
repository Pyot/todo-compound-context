import React, { Component, createContext } from "react"
import Control from './Control'
import TodoList from './TodoList'
import Item from './Item'
import TimeStamp from './TimeStamp'
import TextItem from "./TextItem";


import { v4 } from 'uuid'

const TodoContext = createContext();
export const TodoConsumer = TodoContext.Consumer;


class Todos extends Component {
    static Control = Control;
    static TodoList =  TodoList;
    static Item = Item;
    static TimeStamp =  TimeStamp;
    static Text = TextItem;

    addTodo = () => {
        const { input } = this.state;
        if (input === "") return;
        this.setState(() => ({
            input: "",
            todos: [
                ...this.state.todos,
                {
                    text: input,
                    timestamp: new Date().toLocaleDateString(),
                    completed: false,
                    id: v4()
                }
            ]
        }));
    };

    updateInput = event => {
        const { value } = event.target;
        this.setState({ input: value });
    };

    state = {
        input: "",
        todos: [{ text: 'First task', timestamp: '12/02/2019', completed: false, id: v4() },
        { text: 'Second task', timestamp: '13/02/2019', completed: true, id: v4() }],
        addTodo: this.addTodo,
        updateInput: this.updateInput
    };

    render() {
        console.log(this.state.todos)
        const { children } = this.props;
        return (
            <div>
                <TodoContext.Provider value={this.state}>
                    {children}
                </TodoContext.Provider>
            </div>
        )
    }

}

export default Todos;