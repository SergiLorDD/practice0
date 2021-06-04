import { SET_USER } from "./actionTypes";

const initialState = {
  user: {
    name: "",
    surname: "",
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const { name, surname } = action.payload;
      return {
        ...state,
        user: {
          name,
          surname,
        }
      }
    }
    default: {
      return state;
    }
  }
}