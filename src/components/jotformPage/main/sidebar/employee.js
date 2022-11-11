import React, { Component } from 'react'

export default class Employee extends Component {
  render() {
    return (
      <div className="employees">
        <div className="avatar"></div>
        <div className="name">
          {this.props.emp.name} {this.props.emp.surname}
        </div>
      </div>
    )
  }
}
