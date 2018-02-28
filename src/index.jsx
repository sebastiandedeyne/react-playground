import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import todos from "./todos/store";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({ todos });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
