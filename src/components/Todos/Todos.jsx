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
    static TodoList = TodoList;
    static Item = Item;
    static TimeStamp = TimeStamp;
    static Text = TextItem;
    static Completed = Completed;
    static Remove = Remove;


    componentDidUpdate(prevProps, prevState) {
      if(prevState.todos !== this.state.todos){
        this.setState({todosFilter: this.state.todos})
      }
    }

    updateInput = event => {
        const { value } = event.target;
        this.setState({ input: value });
      };
    
      addTodo = () => {
        const { input } = this.state;
        if (input === "") return;
        this.setState(prevState => ({
          input: "",
          todos: [
            ...prevState.todos,
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
        let id = e.target.parentNode.id;
        this.setState({ 
          todos: this.state.todos.filter(todo => todo.id !== id)
        })
      };
    
    
      completedTodo = (e) => {
        let id = e.target.parentNode.id;
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
    
      editItem = (e) => {
        e.preventDefault();

        let id = e.target.parentNode.id;

        console.log("TCL: Todos -> editItem -> id", id)
        let value = e.target.value
        this.setState({
          todos: this.state.todos.map(todo => {
            if(todo.id === id ){
              return {
                ...todo,
                text: value }
              } else {
                return todo;
              }
            }
          )
        }) 
      }
    
      state = {
        input: "",
        todos: [{text: 'First task', timestamp: '12/02/2019', completed: false, id: v4()},
        {text: 'Second task', timestamp: '13/02/2019', completed: true, id: v4() }],
        updateInput: this.updateInput,
        addTodo: this.addTodo,
        removeTodo: this.removeTodo,
        completedTodo: this.completedTodo,
        editItem: this.editItem
      
      };
    
      render() {
        console.log(this.state.todos)
        const { children } = this.props;
        const { todos } = this.state;
        return (
          <div>
            <h1>You have {todos.length} To Do</h1>
            <TodoContext.Provider value={this.state}>
              {children}
            </TodoContext.Provider>
          </div>
        );
      }
    }
    
    export default Todos;
    