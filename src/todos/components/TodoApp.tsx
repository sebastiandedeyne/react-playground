import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { bindActionCreators } from "redux";
import { State, Action } from "../../store";
import { connect, Dispatch } from "react-redux";
import { addTodo, removeTodo, Todo } from "../store";

interface Props {
  todos: Todo[];
  addTodo: (name: string) => void;
  removeTodo: (id: number) => void;
}

const Todos = ({ todos, addTodo, removeTodo }: Props) => (
  <div>
    <TodoList todos={todos} onRemove={removeTodo} />
    <TodoInput onAdd={addTodo} />
  </div>
);

const mapStateToProps = (state: State) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators({ addTodo, removeTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
