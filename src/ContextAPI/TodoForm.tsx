import React, { useState } from 'react';
import { useTodosDispatch } from './contexts/TodoContext';

export default function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value
    });
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="What should I do?"
        onChange={onChange}
      />
    </form>
  );
}
