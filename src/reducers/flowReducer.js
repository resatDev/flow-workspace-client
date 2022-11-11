import { actionTypes } from './../action/actionTypes'

const initState = {
  flows: []
};

export const flowReducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.FLOWS:
    return action.flows
  default:
    return state
  }
}