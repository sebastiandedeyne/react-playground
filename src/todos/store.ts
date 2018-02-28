export type Action =
  | { type: null }
  | { type: "ADD_TODO"; name: string }
  | { type: "REMOVE_TODO"; id: number };

export interface Todo {
  id: number;
  name: string;
}

export interface State {
  nextId: number;
  todos: Todo[];
}

export function addTodo(name: string) {
  return { type: "ADD_TODO", name };
}

export function removeTodo(id: number) {
  return { type: "REMOVE_TODO", id };
}

const initialState = {
  nextId: 1,
  todos: []
};

export default function todos(
  state: State = initialState,
  action: Action = { type: null }
) {
  switch (action.type) {
    case "ADD_TODO":
      const todo = { id: state.nextId, name: action.name };
      return {
        nextId: state.nextId + 1,
        todos: state.todos.concat(todo)
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id)
      };
    default:
      return state;
  }
}
