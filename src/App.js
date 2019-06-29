import React from 'react';
import Todos from './components/Todos/Todos'
import './App.css';
import { v4 } from 'uuid';

function App() {
  return (
    <div className="App">
        <Todos>
          <Todos.Control/>
          <Todos.TodoList>
          {({ todos }) =>
          todos.map((todo) => (
            <Todos.Item key={v4()} id={todo.id}>
               <Todos.TimeStamp timeStamp={todo.timestamp} />
               <Todos.Text text={todo.text} />
            </Todos.Item>
              
          ))}
          </Todos.TodoList>
      </Todos>
    </div>
  );
}

export default App;
