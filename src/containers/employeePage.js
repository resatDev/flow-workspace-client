import React, { Component } from 'react'
import Navbar from '../components/jotformPage/main/navbar'
import { backendMissions, backendSubs } from '../api/restApi/api'

export default class EmployeePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      flowId: '',
      flowTitle: '',
      orderQ: '',
      subs: []
    }
  }

  componentWillMount = async () => {
    await backendMissions('getMissions', {
      employee: localStorage.getItem('empId')
    })
      .then(res => {
        this.setState({
          flowId: res.data.flowId,
          flowTitle: res.data.flowTitle,
          orderQ: res.data.orderQ
        })
        console.log(this.state.orderQ)
      })
    await backendSubs('getSubmission', {
      flowId: this.state.flowId
    })
      .then(res => {
        console.log(res)
        res.data.map(sub => {
          console.log(sub)
          if(sub.status == this.state.orderQ){
            this.setState({
              subs: [...this.state.subs, sub]
            })
          }
        })
      })
  }

  complete = async () => {
    await backendSubs('update', {
      status:( Number(this.state.orderQ) +1).toString(),
      flowId: this.state.flowId
    })
      .then(res => {
        window.location.reload(true)
      })
  }

  cancel = async () => {
    await backendSubs('update', {
      status: 'cancel',
      flowId: this.state.flowId
    })
      .then(res => {
        window.location.reload(true)
      })
  }
  render() {
    return (
      <div className='employeePage'>
        <Navbar />
        <div className="container">
          <h1 className="blue-text center">
                        MISSIONS
          </h1>
          {
            this.state.subs.map(sub => {
              if(sub.sub_key == 'product'){
                return  <div className="card">
                  <span>{this.state.flowTitle} - {sub.answer} - {sub.amount}</span>
                  <br />
                  <br />
                  <button className="btn light-waves" onClick={this.complete}>COMPLETE</button>
                  <button className="btn light-gray" onClick={this.cancel}>CANCEL</button>
                </div>
              }
            })
          }
                   
        </div>
      </div>
    )
  }
}
