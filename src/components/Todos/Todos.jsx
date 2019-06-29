import React, { Component, createContext } from "react"
import Control from './Control'
import TodoList from './TodoList'
import Item from './Item'
import TimeStamp from './TimeStamp'
import TextItem from "./TextItem"
import Completed from "./Completed"
import Remove from "./Remove"


import { v4 } from 'uuid'

const TodoContext = createContext();
export const TodoConsumer = TodoContext.Consumer;


class Todos extends Component {
    static Control = Control;
    static TodoList =  TodoList;
    static Item = Item;
    static TimeStamp =  TimeStamp;
    static Text = TextItem;
    static Completed = Completed;
    static Remove = Remove;

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

    removeTodo = (e) => {
        let id = e.target.parentNode.parentNode.id;
        this.setState({ 
          todos: this.state.todos.filter(todo => todo.id !== id)
        })
      };

    updateInput = event => {
        const { value } = event.target;
        this.setState({ input: value });
    };

    completedTodo = (e) => {
        let id = e.target.parentNode.parentNode.parentNode.id;
        console.log(id)
        this.setState({
          todos: this.state.todos.map(todo => {
            if(todo.id === id ){
              return {
                ...todo,
                completed: !todo.completed }
              } else {
                return todo;
              }
            }
          )
        })  
      }

    state = {
        input: "",
        todos: [{ text: 'First task', timestamp: '12/02/2019', completed: false, id: v4() },
        { text: 'Second task', timestamp: '13/02/2019', completed: true, id: v4() }],
        addTodo: this.addTodo,
        updateInput: this.updateInput,
        removeTodo: this.removeTodo,
        completedTodo: this.completedTodo
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