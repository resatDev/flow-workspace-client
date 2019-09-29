import React, { Component } from 'react'
import './../../../assets/style/main.css'
import logo from './../../../assets/image/logo-main.png'
import { Link } from 'react-router-dom'
import Logo from './../../../assets/image/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="upper">
                    <div className="logo">
                        <Link to="/flow-main-page">
                            <img src={logo} alt='Main Logo'/>
                        </Link>
                    </div>
                    <div className="settings">
                        <div className="profile" onClick={() => {
                            if(this.props.setting) {this.props.setting()}
                            else if(this.props.view) {this.props.view()}
                                }
                            }>
                            <img src={Logo} alt="Profile Photo"/>
                        </div>
                    </div>
                </div>
                <div className="lower">
                    <div className="directing">
                        FLOW WORKSPACE
                    </div>
                </div>
            </div>
        )
    }
}
