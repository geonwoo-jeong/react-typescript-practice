import React from 'react';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

export default function TodoList() {
  const todos = useTodos();

  if (todos.length === 0) return <p>No Data</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
