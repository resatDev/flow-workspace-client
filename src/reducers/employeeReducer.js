import { actionTypes } from "../action/actionTypes";

const initState = {
  employee: []
}

export const employeeReducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.EMPLOYEE:
    return action.employees            
  default:
    return state
  }
}