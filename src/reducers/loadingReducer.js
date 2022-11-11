import { actionTypes } from './../action/actionTypes'

const initState = false;

export const loadingReducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.LOADING:
    return action.loading
  default:
    return state
  }
}