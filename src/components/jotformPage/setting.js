import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Setting extends Component {
    render() {
        return (
            <div className="profileSetting">
                <a href="https://turk.jotform.com/myaccount/settings" className="btn light-waves links" target="_blank">Settings</a>
                <Link to="/" className="btn light-waves links" onClick={this.props.logout}>Logout</Link>
            </div>
        )
    }
}
