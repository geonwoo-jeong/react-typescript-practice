import React, { useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

export default function TodoInsert() {
  const [value, setValue] = useState<string>('');
  const addTodo = useAddTodo();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="What should I do?"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
