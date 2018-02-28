import { combineReducers, createStore } from "redux";
import { todos, Action as TodosAction, State as TodosState } from "./todos";

export type Action = TodosAction;

export interface State {
  todos: TodosState;
}

const rootReducer = combineReducers({ todos });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
