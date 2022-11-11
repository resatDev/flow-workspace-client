import React, { Component } from 'react'
import JotFormLogin from '../components/login/jotFormLogin'
import EmployeeLogin from '../components/login/employeeLogin'
import { loginSuccess,loginFail } from './../action/loginAction'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginJotForm } from './../api/jotform/jotform'
import Logo from './../assets/image/logo.png'

class landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      loginType: ''
    }
    this.loginJotForm = loginJotForm.bind(this)
  }
  changeLoginJotForm = () => {
    (localStorage.getItem('appKey')) ?
      this.setState({
        loginType: 'direct'
      })
      :
      this.setState({
        loginType: 'jotform'
      })
  }
  changeLoginEmployee = () => {
    this.setState({
      loginType: 'employee'
    })
  }
  changeLoginClose = () => {
    this.setState({
      loginType: ''
    })
  }
  render() {
    if(this.state.loginType === 'direct'){
      return (<Redirect to="/flow-main-page"></Redirect>)
    }
    return  (
      <div>
        {
          (this.state.loginType === 'jotform') ? 
            <JotFormLogin 
              close={this.changeLoginClose} 
              login={this.props.loginSuccess} 
              fail={this.props.loginFail}
              api={this.loginJotForm}
            /> 
            : 
            null
        }
        {
          (this.state.loginType === 'employee') ? 
            <EmployeeLogin close={this.changeLoginClose}/> : null
        }
        <div className="container">
          <div className="center">
            <img src={Logo} alt="Logo"  className="center"/>
          </div>
          <h1 className="grey-text center">
                        JotForm Flow Workspace
          </h1>
          <div className="buttons center">
            <button className="btn grey button" onClick={this.changeLoginJotForm}>JotForm Login</button>
            <button className="btn grey button" onClick={this.changeLoginEmployee}>Employee Login</button>
          </div>
          <div className="footer center">
                        Copyright JotForm 2019
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: (username,password,email,appKey) => dispatch(loginSuccess(username,password,email,appKey)),
    loginFail: (message) => dispatch(loginFail(message))
  }
}

const mapStateToProps = state => {
  return {
    username: state.loginReducer.info.username,
    password: state.loginReducer.info.password,
    email: state.loginReducer.info.email,
    appKey: state.loginReducer.info.appKey,
    message: state.loginReducer.info.message
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(landing)