import React from 'react';
import Counter from './Counter';
import Form from './Form';
import ReducerCounter from './ReducerCounter';
import ReducerSample from './ReducerSample';
import RefSample from './RefSample';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Counter />
      <Form onSubmit={onSubmit} />
      <ReducerCounter />
      <ReducerSample />
      <RefSample onSubmit={onSubmit} />
    </>
  );
}
export default App;
