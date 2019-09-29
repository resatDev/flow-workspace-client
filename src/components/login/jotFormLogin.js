import React, { Component } from 'react'
import ImageArea from './jotform/imageArea'
import FormArea from './jotform/formArea'
import './../../assets/style/login.css'

export default class JotFormLogin extends Component {
    render() {
        return (
            <div className='loginPopUpJotForm'>
               <div className="wrapJotForm">
                    <FormArea 
                        jotFormApiLogin={this.props.api}
                        loginFail={this.props.fail}
                        loginSuccess={this.props.login}   
                    />
                    <ImageArea close={this.props.close} />
                </div>
            </div>
        )
    }
}
