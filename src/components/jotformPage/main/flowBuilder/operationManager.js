import React, { Component } from 'react'
import Select from 'react-select'
import { questionJotForm } from '../../../../api/jotform/jotform'

export default class OperationManager extends Component {
    constructor(props){
        super(props)
        this.employee = []
        this.question = []
        this.selectedQuest = ''
        this.selectedEmplo = ''      
    }
    componentWillMount = async () => {
        const flow_id = window.location.pathname.split('/')[2];   
        const content = await questionJotForm(flow_id, localStorage.getItem('appKey'))
        Object.keys(content.content).forEach(quest => {
            this.question.push({
                value: content.content[quest].qid,
                label: content.content[quest].text
            })
        })
    }

    handleChangeQuestion = (e) => {
        this.setState({
            selectedQuest: {[e.value]: e.label}
        })
    }

    handleChangeEmployee = (e) => {
        this.setState({
            selectedEmplo: {[e.value]: e.label}
        })
    }

    render() {

        return (
            <div className="operationManager">
                <h1 className="center orange-text">
                    JotForm
                </h1>
                <h3 className="center grey-text">FLOW BUILDER</h3>
                <div className="employee">
                    <h6 className="grey-text">Select a Question</h6>
                    <Select options={this.question} onChange={this.handleChangeQuestion}/>
                </div>
                <div className="question">
                    <h6 className="grey-text">Select an Employee</h6>
                    <Select options={this.props.employee} onChange={this.handleChangeEmployee}/>
                </div>
                <button className="btn light-waves" id="getApproval" onClick={() => {
                        if(this.state.selectedQuest != '' && this.state.selectedEmplo != ''){ 
                            this.props.getValue(this.state.selectedEmplo, this.state.selectedQuest)
                        }else{
                            alert('Please selent a question and an employee')
                        }
                    }}>GET APPROVAL</button>
                <button className="btn grey" id="finish">FINISH THE FLOW</button>
                <footer className="footer">
                    Copyright JotForm A.Ş. 2019
                </footer>
            </div>
        )
    }
}
