export function addTodo(name) {
  return { type: "ADD_TODO", name };
}

export function removeTodo(id) {
  return { type: "REMOVE_TODO", id };
}

const initialState = {
  nextId: 1,
  todos: []
};

export default function todos(state = initialState, action = {}) {
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
