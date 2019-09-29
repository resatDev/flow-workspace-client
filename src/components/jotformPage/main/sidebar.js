import React, { Component } from 'react'
import EmployeeOnline from './sidebar/employeeOnline'
import NodeArea from './events/nodeArea'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <button  className="btn light-waves btn-large" onClick={this.props.form}> CREATE NEW FLOW</button>
                <button className="btn light-waves" onClick={this.props.emp}>MY EMPLOYEES</button>

                <div className="events">
                    <div className="recentEvents">
                        RECENT EVENTS
                    </div>
                    <NodeArea />
                </div>
                <div className="employee">
                    <div className="heading">ACTIVE EMPLOYEE</div>
                    <EmployeeOnline />
                </div>
            </div>
        )
    }
}
