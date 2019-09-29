import React, { Component } from 'react'
import logo from './../../../assets/image/logo.png'
import { backendAdmins } from './../../../api/restApi/api'
import { Redirect } from 'react-router-dom'

export default class FormArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/flow-main-page" />
        }
        return (
            <div className="form">
                <h5 className="green-text center">Welcome Back</h5>
                <img src={logo} alt="JotForm Logo" className="circle responsive-img "/>
                <h5 className="center">SIGN IN WITH JOTFORM</h5>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="validate" name="username" onChange={this.handleChange}/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="validate" name="password"onChange={this.handleChange}/>
                </div>
                <button className="btn light-wave center" onClick={() => {
                    this.props.jotFormApiLogin(this.state.username, this.state.password).then(res => {
                        console.log(res)
                        if(res.message === 'success'){
                            localStorage.setItem('appKey', res.content.appKey)
                            backendAdmins('register', {
                                username: res.content.username,
                                password: this.state.password,
                                name: res.content.name,
                                email: res.content.email,
                                status: res.content.status,
                                industry: res.content.industry
                            })
                            this.props.loginSuccess(res.content.username, this.state.password, res.content.email, res.content.appKey)
                            localStorage.setItem('admin_username', res.content.username)
                            this.setState({redirect: true})
                        }
                        else{
                            this.props.loginFail('Login Unsuccessful!')
                        }
                    })
                }}>Login</button>
                <div className="copyright">
                    Copyright© <a href="https://www.jotform.com">JotForm</a> 2019
                </div>
                <p>Customize your company flows easily, save time & effort .</p>

            </div>
        )
    }
}
