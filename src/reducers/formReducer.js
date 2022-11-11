import { actionTypes } from "../action/actionTypes";

const initState = {
  forms: []
}

export const formReducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.FORMS:
    return action.forms
  default:
    return state
  }
}