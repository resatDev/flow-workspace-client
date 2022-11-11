import { actionTypes } from './../action/actionTypes'

const initState = {
  info: {
    username: '',
    password: '',
    email: '',
    appKey: ''
  }
}

export const loginReducer = (state = initState, action) =>{
  switch (action.type) {
  case actionTypes.LOGIN_SUCCESS:
    return {
      info: {
        username: action.info.username,
        password: action.info.password,
        email: action.info.email,
        appKey: action.info.appKey
      }
    }
  case actionTypes.LOGIN_FAIL:
    return {
      info: {
        message: action.info.message
      }
    }
  default: 
    return state
  }
}