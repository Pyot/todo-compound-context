import React, { Component, createContext } from "react";
import Control from './Control';

const TodoContext = createContext();
export const TodoConsumer = TodoContext.Consumer;


class Todos extends Component {
    static Control = Control

    state = {
        input: "",
        todos: [{ text: 'First task', timestamp: '12/02/2019', completed: false, id: '' },
        { text: 'Second task', timestamp: '13/02/2019', completed: true, id: '' }]
    };

    render() {
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