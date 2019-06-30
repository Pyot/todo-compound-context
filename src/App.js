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
          {({ todosFilter }) =>
          todosFilter.map((todo) => (
            <Todos.Item key={todo.id} id={todo.id}>
               <Todos.TimeStamp timeStamp={todo.timestamp} />
               <Todos.Text text={todo.text} />
               <Todos.Completed completed={todo.completed} />
               <Todos.Remove todoId={todo.id}/>

            </Todos.Item>
              
          ))}
          </Todos.TodoList>
      </Todos>
    </div>
  );
}

export default App;
