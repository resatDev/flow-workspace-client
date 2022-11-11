import React, { Component } from 'react'
import Schema from './main/schema'

export default class FlowDetails extends Component {
  render() {
    return (
      <div className="flowDetails">
        <div className="close" onClick={this.props.close}> 
          <i className="fa fa-arrow-left"></i>
        </div>
        <Schema />
        <div className="info">
          <div className="employees">
            <div className="employeesArea">
              <h6 className="center">EMPLOYEE</h6>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
              <div className="employee">Emloyee 1 - Department</div>
            </div>
          </div>
          <div className="submissionCount">
            <div className="countArea">
              <h3 className="center">TOTAL SUBMISSION</h3>
              <h6 className="center">1211613</h6>
            </div>
            <div className="complete">
              <h5 className="center">COMPLETED</h5>
              <p className="center">1231</p>
            </div>
            <div className="inComplete">
              <h5 className="center">INCOMPLOTED</h5>
              <p className="center">1231</p>
            </div>
          </div>
          <div className="questions">
            <div className="questArea">
              <h6 className="center">QUESTIONS</h6>
              <div className="questi">Question - 1</div>
              <div className="questi">Question - 2</div>
              <div className="questi">Question - 3</div>
              <div className="questi">Question - 4</div>
              <div className="questi">Question - 5</div>
              <div className="questi">Question - 6</div>
              <div className="questi">Question - 7</div>
              <div className="questi">Question - 8</div>
              <div className="questi">Question - 9</div>
              <div className="questi">Question - 10</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
