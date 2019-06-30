import React from 'react';
import Todos from './components/Todos/Todos'
import './App.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';






function App() {
  return (
    <div className="App container mt-5">
      <Todos>
        <Todos.Control />
        <Todos.DndList />
        
      </Todos>
    </div>
  );
}

export default App;
