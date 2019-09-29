import React, { Component } from 'react'
import Navbar from '../components/jotformPage/main/navbar'
import FlowArea from '../components/jotformPage/main/flowBuilder/flowArea'
import OperationManager from '../components/jotformPage/main/flowBuilder/operationManager'
import Setting from '../components/jotformPage/setting'
import { backendUsers, backendMissions } from './../api/restApi/api'
import { submissionJotForm } from '../api/jotform/jotform'

export default class FlowBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            setting: false,
            employee: [],
            nodeValues: [],
            orderQ: 0
        }
    }

    componentWillMount = async() =>{
        await backendUsers('info', {
            admin: localStorage.getItem('admin_id')
        }).then(res => {
            res.data.map(emp => {
                this.state.employee.push({
                     value: emp.id,
                     label: `${emp.name} ${emp.surname} ${emp.department}`
                 })
            }) 
        })
    }

    handleClickValues = async (employee, question) => {
        await backendMissions('getMission', {
            flowId: localStorage.getItem('flow_id')
        })
        .then(res => {
            this.setState({
                orderQ: res.data.length + 1
            })
            console.log(this.state.orderQ)
        })
        await backendMissions('create', {
            flowTitle: 'New',
            flowId: localStorage.getItem('flow_id'),
            formId: localStorage.getItem('form_id'),
            admin: localStorage.getItem('admin_id'),
            employee: Object.keys(employee),
            qid: Object.keys(question),
            status: 'active',
            orderQ: this.state.orderQ
        }).then(res => {
            window.location.reload(true)
        })
    }
    render() {
        return (
            <div className="flowBuilder">
                {
                    (this.state.setting) ? <Setting /> : null
                }
                <Navbar setting={this.viewSetting}/>
                <OperationManager employee={this.state.employee} getValue={this.handleClickValues}/>
                <FlowArea nodeValue={this.state.nodeValues}/>
            </div>
        )
    }
}

