import React, { Component } from 'react'
import ImageArea from './employee/imageArea'
import FormArea from './employee/formArea'
import './../../assets/style/login.css'

export default class EmployeeLogin extends Component {
    render() {
        return (
            <div className='loginPopUpEmployee'>
               <div className="wrapEmployee">
                    <ImageArea close={this.props.close} />
                    <FormArea login={this.props.login} loginJotForm={this.props.api}/>
               </div>
            </div>
        )
    }
}
