import React, { Component } from 'react'
import EmployeeCard from './employeeCard'
import { connect } from 'react-redux'

class EmployeeArea extends Component {
  render() {
    return (
      <div className="employeeArea">
        <div className="header">
          <i className="fa fa-arrow-left" onClick={this.props.back}></i>
        </div>
        {
          (!this.props.loading) ? 'Loading...' : 
            this.props.employee.map(emp => {
              return <EmployeeCard emp={emp} key={emp.id}/>
            })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    employee: state.employeeReducer,
    loading: state.loadingReducer
  }
}
export default connect(mapStateToProps)(EmployeeArea)
