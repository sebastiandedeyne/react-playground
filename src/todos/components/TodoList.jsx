import React from "react";

const TodoList = ({ todos, onRemove }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i} onClick={() => onRemove(todo.id)}>
        {todo.name}
      </li>
    ))}
  </ul>
);

export default TodoList;
