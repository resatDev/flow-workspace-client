import { actionTypes } from './actionTypes';

export const loginSuccess = (username, password, email, appKey) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    info: {
      username: username,
      password: password,
      email: email,
      appKey: appKey
    }
  }
}

export const loginFail = (message) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    info: {
      message: message
    }
  }
}

export const events = (events) => {
  return{
    type: actionTypes.EVENTS,
    events: events
  }
}

export const employee = (employee) => {
  return {
    type: actionTypes.EMPLOYEE,
    employees: employee
  }
}

export const isLoading = (loading) => {
  return {
    type: actionTypes.LOADING,
    loading: loading
  }
}

export const flows = (flow) => {
  return {
    type: actionTypes.FLOWS,
    flows: flow
  }
}

export const forms = form => {
  return {
    type: actionTypes.FORMS,
    forms: form
  }
}

export const nodeValue = value => {
  return {
    type: actionTypes.NODE,
    values: value
  }
}

export const submission = sub => {
  return {
    type: actionTypes.SUBMISSION,
    subs: sub
  }
}
