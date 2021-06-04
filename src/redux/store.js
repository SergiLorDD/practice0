import { createStore, combineReducers } from "redux";
import userReducer from "./reducerUser";
import todoReducer from "./reducerToDo";

export default createStore(
  combineReducers({
    user: userReducer,
    todo: todoReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
