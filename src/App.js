import React from 'react';
import Todos from './components/Todos/Todos'
import './App.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ todo }) =>
  (<Todos.Item key={todo.id} id={todo.id}>
    <Todos.Completed completed={todo.completed} />
    <Todos.Text text={todo.text} />
    <Todos.TimeStamp timeStamp={todo.timestamp} />
    <Todos.Remove todoId={todo.id} />
  </Todos.Item>));

const SortableList = SortableContainer(() => {
  return (
    <Todos.TodoList>
      {({ todosFilter, dndDisabled }) =>
        todosFilter.map((todo, index) => (
          <SortableItem disabled={dndDisabled} key={`item-${todo.id}`} index={index} todo={todo} />
        ))}
    </Todos.TodoList>
  );
});

function App() {
  return (
    <div className="App container mt-5">
      <Todos>
        <Todos.Control />
        <Todos.Dnd>
          {({ onSortEnd }) => <SortableList distance={5} onSortEnd={onSortEnd} />}
        </Todos.Dnd>
      </Todos>
    </div>
  );
}

export default App;
