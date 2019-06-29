import React from 'react';
import Todos from './components/Todos/Todos'
import './App.css';

function App() {
  return (
    <div className="App">
        <Todos>
          <Todos.Control/>
      </Todos>
    </div>
  );
}

export default App;
