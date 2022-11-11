import React, { Component } from 'react'
import Registered from './registered'

export default class AddEmployee extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      surname: '',
      email: '',
      department: '',
      complete: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  completing = () => {
    this.setState({
      complete: true
    })
    setTimeout(this.setState({
      complete: false
    }), 5000)
  }
  render() {
    return (
      <div className='addEmployee'>
        <div className="whiteArea">
          <div className="form">
            {
              (this.state.complete) ? <Registered /> : null
            }
            <h3 className="center">EMPLOYEE REGISTRATION</h3>
            <div className="close" onClick={() => {
              this.props.close()
              document.location.reload(true)}
            }>X</div>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.handleChange}/>
              <label htmlFor="surname">Surname</label>
              <input type="text" name="surname" id="surname" onChange={this.handleChange}/>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="department">
              <label htmlFor="department">Department</label>
              <input type="text" name="department" id="department" onChange={this.handleChange}/>
            </div>
            <button className="btn light-wave" onClick={() => {
              this.props.add(this.state)
              if(localStorage.getItem('employee_register_status') == '200'){
                this.setState({
                  complete: true
                })
                setTimeout(() => {this.setState({
                  complete: false
                })}, 2000)
              }
            }}
            >ADD NEW EMPLOYEE</button>
          </div>
        </div>
      </div>
    )
  }
}
