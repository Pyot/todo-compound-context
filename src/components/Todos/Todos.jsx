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


  componentWillMount() {
    this.setState({ todosFilter: this.state.todos })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      // this.setState({ todosFilter: this.state.todos })
      this.updateTodo();
    };
    
    
  }

  updateTodo = () => {
    let updatedTodos = [...this.state.todos];
    console.log(this.state.search)

    updatedTodos = updatedTodos.filter(item => {
      return item.text.toLowerCase().search(
        this.state.search) !== -1;
    });
    console.log('updatedTodos',updatedTodos)
    this.setState({ 
      todosFilter: updatedTodos
    });

  }

  searchList = (e) => {
    let updatedTodos = [...this.state.todos];
    console.log("TCL: Todos -> searchList -> updatedTodos", updatedTodos)

    updatedTodos = updatedTodos.filter(item => {
      return item.text.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });

    this.setState({ 
        todosFilter: updatedTodos,
        search: e.target.value.toLowerCase()
      });
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
    let id = e.target.parentNode.parentNode.id;
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  };


  completedTodo = (e) => {
    let id = e.target.parentNode.parentNode.parentNode.id;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      }
      )
    })
  }

  editItem = (e) => {
    let id = e.target.parentNode.parentNode.id;
    let value = e.target.value
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text: value
          }
        } else {
          return todo;
        }
      }
      )
    })
  }

  state = {
    input: "",
    search: "",
    todos: [{text: 'First task', timestamp: '12/02/2019', completed: false, id: v4()},
    {text: 'Second task', timestamp: '13/02/2019', completed: true, id: v4()}],
    todosFilter: [],
    updateInput: this.updateInput,
    addTodo: this.addTodo,
    removeTodo: this.removeTodo,
    completedTodo: this.completedTodo,
    editItem: this.editItem,
    searchList: this.searchList
  
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
    );
  }
}

export default Todos;
