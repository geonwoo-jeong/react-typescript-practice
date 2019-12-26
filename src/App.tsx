import React from 'react';
import Counter from './Counter';
import Form from './Form';
import ReducerCounter from './ReducerCounter';
import ReducerSample from './ReducerSample';
import RefSample from './RefSample';
import TodoForm from './ContextAPI/TodoForm';
import TodoList from './ContextAPI/TodoList';
import { TodosContextProvider } from './ContextAPI/contexts/TodoContext';
import ReduxCounter from './ReduxCounter';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <div>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </div>
      <div>
        <Counter />
        <Form onSubmit={onSubmit} />
        <ReducerCounter />
        <ReducerSample />
        <RefSample onSubmit={onSubmit} />
      </div>
      <div>
        <ReduxCounter />
      </div>
    </>
  );
}
export default App;
