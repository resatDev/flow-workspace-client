import React, { Component } from 'react'
import Logo from './../../../assets/image/logo.png'

export default class EmployeeCard extends Component {
    render() {
        return (
            <div className='employeeCard'>
                <div className="photo">
                    <img src={Logo} alt="Avatar Employee"/>
                </div>
                <div className="empName">{this.props.emp.name} {this.props.emp.surname}</div>
                <div className="empDepartment">{this.props.emp.department}</div>
                <div className="empEmail">{this.props.emp.email}</div>
            </div>
        )
    }
}
