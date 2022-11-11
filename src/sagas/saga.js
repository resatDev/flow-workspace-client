import { loginSuccess }  from './../action/loginAction'
import { takeLatest, put } from 'redux-saga/effects'
import { loginJotForm } from './../api/jotform/jotform'

const login = loginSuccess()
function* loginSuc(){
  const response = yield loginJotForm(login.info.username, login.info.password)
  console.log('saga: ', response)
  yield put('ASYNC_LOGIN_SUCCESS', {
    info: {
      username: response.content.username,
      password: login.info.password,
      email: response.content.email,
      appKey: response.content.appKey
    }
  })
}

export default function* exampleSaga(){
  console.log('çalışıyor ')
  yield takeLatest('ASYNC_LOGIN_SUCCESS', loginSuc)
}

