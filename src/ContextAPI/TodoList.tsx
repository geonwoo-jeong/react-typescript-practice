import React from 'react';
import TodoItem from './TodoItem';
import { useTodosState } from './contexts/TodoContext';

export default function TodoList() {
  const todos = useTodosState();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
