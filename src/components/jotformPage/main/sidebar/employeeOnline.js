import React, { Component } from 'react'
import Employee from './employee'
import { connect } from 'react-redux'

class EmployeeOnline extends Component {
    render() {
        return (
            <div className="employeeOnline">
                {
                    (!this.props.loading) ? 'Loading...' :
                    this.props.employees.map(emp => {
                        return <Employee emp={emp} key={emp.id}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employeeReducer,
        loading: state.loadingReducer
    }
}

export default connect (mapStateToProps, {})(EmployeeOnline)
