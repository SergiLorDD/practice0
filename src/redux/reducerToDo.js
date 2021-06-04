import { SET_TODOITEM, CHANGE_TODOITEM, DELETE_TODOITEM } from "./actionTypes";

const initialState = [
        // { date: new Date(), text: "First task", id: new Date().getTime() },
        // { date: new Date(), text: "Second task", id: new Date().getTime() + 1 },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TODOITEM: {
      const text = action.payload;
      return [...state, {date: new Date(), text, id: new Date().getTime()}];
    }
    case CHANGE_TODOITEM: {
        const {text, id} = action.payload;
        const newState = state.map(item => {
            if(item.id === id){
                return {date: new Date(), text, id}
            }
            return item
        })
        return newState;
      }
      case DELETE_TODOITEM: {
        const id = action.payload;
        const newState = state.filter(item => item.id !== id)
        return newState;
      }
    default: {
      return state;
    }
  }
}
