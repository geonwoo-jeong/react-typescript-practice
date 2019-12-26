// action types

const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// action functions

export const addTodo = (text: string) => ({ type: ADD_TODO, payload: text });
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

// action typescript

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// typescript types

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

// initial state

const initialState: TodosState = [
  { id: 1, text: 'Learn TypeScript', done: true },
  { id: 2, text: 'use TypeScript & Redux', done: true },
  { id: 3, text: 'create Todo List', done: false }
];

// reducers

export default function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
