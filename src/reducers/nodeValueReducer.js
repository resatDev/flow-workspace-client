import { actionTypes } from "../action/actionTypes";

const initState = {
  values: [] 
}

export const nodeValueReducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.NODE:
    return {
      values:[...state.values, action.values.map(value => value)]
    }
  default:
    return state
  }
}