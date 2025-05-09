import React from 'react';
import Calculator from './Calculator';
import TodoList from './Todolist';

function Showcase() {
  return (
    <div>
      <h2>Calculator</h2>
      <Calculator />
      <TodoList />
    </div>
  );
}

export default Showcase;