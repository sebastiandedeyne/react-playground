import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { addTodo, removeTodo } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Todos = ({ todos, addTodo, removeTodo }) => (
  <div>
    <TodoList todos={todos} onRemove={removeTodo} />
    <TodoInput onAdd={addTodo} />
  </div>
);

const mapStateToProps = state => ({ todos: state.todos.todos });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, removeTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
