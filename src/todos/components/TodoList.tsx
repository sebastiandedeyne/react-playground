import React from "react";
import { Todo } from "../store";

interface Props {
  todos: Todo[];
  onRemove: (id: number) => void;
}

const TodoList = ({ todos, onRemove }: Props) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i} onClick={() => onRemove(todo.id)}>
        {todo.name}
      </li>
    ))}
  </ul>
);

export default TodoList;
