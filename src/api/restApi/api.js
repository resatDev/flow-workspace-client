import axios from 'axios';

/**
 * 
 * @param {string} endPoint 
 * @param {object} body 
 * Backend processing 'EMPLOYEE USERS'
 */
export const backendUsers = (endPoint, body) => {
  let keys = Object.keys(body);
  let bodyItems = {};
  keys.forEach(key => {
    bodyItems[key]= body[key]
  })
  return axios
    .post(`http://localhost:5000/users/${endPoint}`, bodyItems)
    .then(res => {
      return res
    })
}

/**
 * 
 * @param {string} endPoint 
 * @param {object} body
 * Backend processing 'JOTFORM USERS - ADMİNS' 
 */
export const backendAdmins = (endPoint, body) => {
  let keys = Object.keys(body);
  let bodyItems = {};
  keys.forEach(key => {
    bodyItems[key]= body[key]
  })
  return axios
    .post(`http://localhost:5000/admins/${endPoint}`, bodyItems)
    .then(res => {
      return res
    })
}

/**
 * 
 * @param {string} endPoint 
 * @param {object} body 
 * Backend processing 'EACH EVENTS - FLOW WORKSPACE'
 */
export const backendEvents = (endPoint, body) => {
  let keys = Object.keys(body);
  let bodyItems = {};
  keys.forEach(key => {
    bodyItems[key]= body[key]
  })
  return axios
    .post(`http://localhost:5000/events/${endPoint}`, bodyItems)
    .then(res => {
      return res
    })
}

/**
 * 
 * @param {string} endPoint 
 * @param {object} body
 * Backend processing 'EMPLOYEE MISSIONS WİTH AN ORDER' 
 */
export const backendMissions = (endPoint, body) => {
  let keys = Object.keys(body);
  let bodyItems = {};
  keys.forEach(key => {
    bodyItems[key]= body[key]
  })
  return axios
    .post(`http://localhost:5000/missions/${endPoint}`, bodyItems)
    .then(res => {
      return res
    })
}

/**
 * 
 * @param {string} endPoint 
 * @param {object} body
 * Backend Processing 'FLOWS CREATED BY ADMINS'
 */
export const backendFlows = (endPoint, body) => {
  let keys = Object.keys(body);
  let bodyItems = {};
  keys.forEach(key => {
    bodyItems[key]= body[key]
  })
  return axios
    .post(`http://localhost:5000/flows/${endPoint}`, bodyItems)
    .then(res => {
      return res
    })
}

/**
 * 
 * @param {string} endPoint 
 * @param {object} body
 * Backend Processing 'SUBMISSION CREATED '
 */
export const backendSubs = (endPoint, body) => {
  let keys = Object.keys(body);
  let bodyItems = {};
  keys.forEach(key => {
    bodyItems[key]= body[key]
  })
  return axios
    .post(`http://localhost:5000/submissions/${endPoint}`, bodyItems)
    .then(res => {
      return res
    })
}