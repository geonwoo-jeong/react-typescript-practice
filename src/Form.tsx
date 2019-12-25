import React, { useState } from 'react';

type FormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

export default function Form({ onSubmit }: FormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
