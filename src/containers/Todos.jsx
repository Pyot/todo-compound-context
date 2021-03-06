import React, { Component, createContext } from 'react';
import Control from 'containers/Control';
import TodoList from 'components/TodoList';
import Item from 'components/Item';
import TimeStamp from 'components/TimeStamp';
import TextItem from 'components/TextItem';
import Completed from 'components/Completed';
import Remove from 'components/Remove';

import { v4 } from 'uuid';

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
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    if (localStorageTodos) {
      this.setState({
        todosFilter: localStorageTodos,
        todos: localStorageTodos
      });
    } else {
      this.setState({ todosFilter: this.state.todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      this.updateTodo();
    }
    if (
      prevState.checkboxAll !== this.state.checkboxAll ||
      prevState.checkboxCompleted !== this.state.checkboxCompleted ||
      prevState.checkboxIncompleted !== this.state.checkboxIncompleted
    ) {
      this.updateTodo();
    }
    if (prevState.search !== this.state.search) {
      this.updateTodo();
    }
  }

  updateTodo = () => {
    // It's updating a todosFilter array according to a search phrase, a checkbox filters and is updating the local storage.
    let updatedTodos = [...this.state.todos];
    const { checkboxAll, checkboxCompleted, checkboxIncompleted } = this.state;

    updatedTodos = updatedTodos.filter(item => {
      if (
        checkboxAll === true ||
        (checkboxAll === false &&
          checkboxCompleted === false &&
          checkboxIncompleted === false)
      ) {
        return item;
      } else if (
        checkboxCompleted === item.completed &&
        checkboxCompleted === true
      ) {
        return item;
      } else if (
        checkboxIncompleted === !item.completed &&
        checkboxIncompleted === true
      ) {
        return item;
      }
      return undefined;
    });

    updatedTodos = updatedTodos.filter(item => {
      return item.text.toLowerCase().search(this.state.search) !== -1;
    });

    this.setState({
      todosFilter: updatedTodos
    });

    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  };

  updateCheckbox = e => {
    let id = e.target.id;
    if (id === 'checkbox-all') {
      this.setState({
        checkboxAll: !this.state.checkboxAll,
        checkboxCompleted: false,
        checkboxIncompleted: false
      });
    } else if (id === 'checkbox-completed') {
      this.setState({
        checkboxAll: false,
        checkboxCompleted: !this.state.checkboxCompleted,
        checkboxIncompleted: false
      });
    } else if (id === 'checkbox-incompleted') {
      this.setState({
        checkboxAll: false,
        checkboxCompleted: false,
        checkboxIncompleted: !this.state.checkboxIncompleted
      });
    }
  };

  searchList = e => {
    this.setState({
      search: e.target.value.toLowerCase()
    });
  };

  updateInput = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  addTodo = () => {
    const { input } = this.state;
    if (input === '') return;
    this.setState(prevState => ({
      input: '',
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

  removeTodo = e => {
    let id = e.target.closest('.todo-item').id;
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  completedTodo = e => {
    let id = e.target.closest('.todo-item').id;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  editItem = e => {
    let id = e.target.closest('.todo-item').id;
    let value = e.target.value;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text: value
          };
        } else {
          return todo;
        }
      })
    });
  };

  state = {
    input: '',
    search: '',
    checkboxAll: true,
    checkboxCompleted: false,
    checkboxIncompleted: false,
    dndDisabled: false,
    todos: [
      { text: 'Task 1', timestamp: '12/02/2019', completed: false, id: v4() },
      { text: 'Task 1', timestamp: '12/02/2019', completed: true, id: v4() },
      { text: 'Task 2', timestamp: '13/02/2019', completed: false, id: v4() },
      { text: 'Task 2', timestamp: '13/02/2019', completed: true, id: v4() },
      { text: 'Alabama', timestamp: '13/02/2019', completed: true, id: v4() },
      {
        text: 'Czestochowa',
        timestamp: '13/02/2019',
        completed: false,
        id: v4()
      },
      { text: 'Warszawa', timestamp: '13/02/2019', completed: true, id: v4() },

      { text: 'New York', timestamp: '13/02/2019', completed: false, id: v4() }
    ],
    todosFilter: [],
    updateInput: this.updateInput,
    addTodo: this.addTodo,
    removeTodo: this.removeTodo,
    completedTodo: this.completedTodo,
    editItem: this.editItem,
    searchList: this.searchList,
    updateCheckbox: this.updateCheckbox
  };

  render() {
    const { children } = this.props;

    return (
      <TodoContext.Provider value={this.state}>{children}</TodoContext.Provider>
    );
  }
}

export default Todos;
