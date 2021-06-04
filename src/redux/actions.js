import { SET_USER, SET_TODOITEM, CHANGE_TODOITEM, DELETE_TODOITEM } from "./actionTypes";

export const setUser = userData => ({
  type: SET_USER,
  payload: {
    name: userData.name,
    surname: userData.surname,
  }
});

export const setTodoItem = text => ({
  type: SET_TODOITEM,
  payload: text
})
export const changeTodoItem = ({text, id}) => ({
  type: CHANGE_TODOITEM,
  payload: {text, id}
})
export const deleteTodoItem = id => ({
  type: DELETE_TODOITEM,
  payload: id
})