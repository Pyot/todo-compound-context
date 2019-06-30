import React from 'react';
import Todos from './components/Todos/Todos'
import './App.css';

function App() {
  return (
    <div className="App container mt-5">
      <Todos>
        <Todos.Control />
        <Todos.TodoList>
          {({ todosFilter }) =>
            todosFilter.map((todo) => (
              <Todos.Item key={todo.id} id={todo.id}>
                <Todos.Completed completed={todo.completed} />
                <Todos.Text text={todo.text} />
                <Todos.TimeStamp timeStamp={todo.timestamp} />
                <Todos.Remove todoId={todo.id} />
              </Todos.Item>
            ))}
        </Todos.TodoList>
      </Todos>
    </div>
  );
}

export default App;
