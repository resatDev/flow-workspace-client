import React, { Component } from 'react'

export default class Submission extends Component {
  render() {
    return (                  
      <tbody>
        <tr>
          <td>{this.props.sub.name}</td>
          <td>{this.props.sub.product}</td>
          <td>{this.props.sub.amount}</td>
          <td>{this.props.sub.status}</td>
        </tr>
      </tbody>
    )
  }
}
