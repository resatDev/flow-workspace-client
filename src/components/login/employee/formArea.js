import React, { Component } from 'react'
import logo from './../../../assets/image/logo.png'
import { backendUsers } from '../../../api/restApi/api'
import { Redirect } from 'react-router-dom'

export default class FormArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = async () => {
        await backendUsers('login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            if(res.statusText){
                localStorage.setItem('empId', res.data.id)
                this.setState({
                    redirect: true
                })
            }
        })

    }
    render() {
        if(this.state.redirect){
            return <Redirect to="/employee-page" />
        }
        return (
            <div className="form">
                <h5 className="green-text center">Welcome Back</h5>
                <img src={logo} alt="JotForm Logo" className="circle responsive-img "/>
                <h5 className="center">SIGN IN WITH EMPLOYEE AUTHENTICATION</h5>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" className="validate" name='email' onChange={this.handleChange}/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="validate" name='password' onChange={this.handleChange}/>
                </div>
                <button className="btn light-wave center" onClick={this.login}>Login</button>
                <div className="copyright">
                    Copyright© <a href="https://www.jotform.com">JotForm</a> 2019
                </div>
                <p>Customize your company flows easily, save time & effort .</p>
            </div>
        )
    }
}
