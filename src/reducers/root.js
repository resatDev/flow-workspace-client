import { loginReducer } from './loginReducer'
import { loadingReducer } from './loadingReducer'
import { eventReducer } from './eventReducer'
import { employeeReducer } from './employeeReducer'
import { flowReducer } from './flowReducer'
import { formReducer } from './formReducer'
import { nodeValueReducer } from './nodeValueReducer'
import { submissionReducer } from './submissionReducer'
import { combineReducers }from 'redux'


export const rootReducer = combineReducers({
  loadingReducer,
  eventReducer,
  loginReducer,
  flowReducer,
  formReducer,
  nodeValueReducer,
  submissionReducer,
  employeeReducer
})