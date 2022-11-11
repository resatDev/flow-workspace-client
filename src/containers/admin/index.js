import React, { Component } from 'react'
import Navbar from '../../components/jotformPage/main/navbar'
import { connect } from 'react-redux'
import { events, isLoading, employee, flows, forms, submission } from './../../action/loginAction'
import { backendAdmins, backendEvents, backendUsers, backendFlows, backendSubs } from '../../api/restApi/api'
import Sidebar from './../../components/jotformPage/main/sidebar'
import Content from '../../components/jotformPage/main/content'
import EmployeeArea from '../../components/jotformPage/employee/employeeArea'
import AddEmployee from '../../components/jotformPage/employee/addEmployee'
import SelectingForm from '../../components/jotformPage/main/forms/selectingForm'
import { formJotform, submissionJotForm } from '../../api/jotform/jotform'
import Setting from '../../components/jotformPage/setting'
import FlowDetails from '../../components/jotformPage/flowDetails'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      employeePage: false,
      addEmployee: false,
      createFlow: false,
      setting: false,
      submission: false,
      content: true,
      flows: [],
      id: '',
      form_id: '',
      sub_key: '',
      answer: '',
    }
  }

  componentWillMount = async () => {
    await backendAdmins('info', {
      username: localStorage.getItem('admin_username')
    })
      .then(admin => {
        localStorage.setItem('admin_id', admin.data.id)
      })

    await backendEvents('getEvents', {
      type: 'event',
      owner: localStorage.getItem('admin_id')
    })
      .then(res => {
        this.props.events(res.data)
      })
    await backendUsers('info', {
      admin: localStorage.getItem('admin_id')
    })
      .then(res => {
        this.props.employee(res.data)
      })
    await backendFlows('getFlow', {
      admin: localStorage.getItem('admin_id'),
      status: 'active'
    })
      .then(res => {
        this.props.flows(res.data)
        this.setState({
          flows: res.data
        })
      })
    await this.state.flows.map(async (flow) => {
      const data = await submissionJotForm(flow.formId, localStorage.getItem('appKey'))
      data.content.map(ans =>{
        this.setState({
          id: ans.id,
          form_id: ans.form_id
        })
        Object.keys(ans.answers).map(async key => {
          if(ans.answers[key].name == 'name'){
            this.setState({
              sub_key: 'name',
              answer: ans.answers[key].prettyFormat
            })
          }
          else if(ans.answers[key].name == 'amount'){
            this.setState({
              sub_key: 'amount',
              answer: ans.answers[key]['answer']
            })
          }
          else if(ans.answers[key].name == 'product'){
            this.setState({
              sub_key: 'product',
              answer: ans.answers[key]['answer']
            })
          }
          await backendSubs('create', {
            sub_id: this.state.id,
            formId: this.state.form_id,
            flowId: flow.id,
            sub_key: this.state.sub_key,
            answer: this.state.answer,
            status: '1'
          })
        })
      })
    })
    const form = await formJotform(localStorage.getItem('appKey'))
    this.props.forms(form.content)
    await this.props.isLoading(true)
  }

  addNewEmployee = addState => {
    backendUsers('register', {
      name: addState.name,
      surname: addState.surname,
      email: addState.email,
      department: addState.department,
      admin: localStorage.getItem('admin_id')
    }).then(res => {
      localStorage.setItem('employee_register_status', res.status)
    })
  } 

  goEmployeePage = () => {
    this.setState({
      employeePage: true,
      content: false,
      submission: false
    })
  }
   
  backMainPage = () => {
    this.setState({
      employeePage: false,
      content: true
    })
  }

  openAddEmployee = () => {
    this.setState({
      addEmployee: true
    })
  }

  closeAddEmployee = () => {
    this.setState({
      addEmployee: false
    })
  } 

  createFlow = () => {
    this.setState({
      createFlow: true
    })
  }

  closeCreateForm = () => {
    this.setState({
      createFlow: false
    })
  }

  settingDisplay = () => {
    if(!this.state.setting) this.setState({setting: true})
    else this.setState({setting: false})
  }

  logout = () => {
    localStorage.removeItem('appKey');
    localStorage.removeItem('admin_username');
    localStorage.removeItem('admin_id');
    localStorage.removeItem('employee_register_status');
  }

  details = (flow_id) => {
    localStorage.setItem('flow_id', flow_id)
    this.setState({
      submission: true,
      content: false
    })
  }

  detailsClose = () => {
    this.setState({
      submission: false,
      content: true
    })
  }
  render() {
    return (
      <div>
        {
          (this.state.content) ? <Content details={this.details}/> : null
        }
        {
          (this.state.createFlow) ? <SelectingForm close={this.closeCreateForm}/> : null
        }
        {
          (this.state.setting) ? <Setting logout={this.logout}/> : null
        }
        <Navbar view={this.settingDisplay}/> 
        {
          (this.state.employeePage && !this.state.content) ? <div><EmployeeArea  back={this.backMainPage}/><a id='addEmployee' className="btn-floating btn-large waves-effect waves-light red" onClick={this.openAddEmployee} > + </a></div> : null
        }
        <Sidebar emp={this.goEmployeePage} form={this.createFlow}/>
        {
          (this.state.addEmployee) ? <AddEmployee close={this.closeAddEmployee} add={this.addNewEmployee}/> : null
        }
        {
          (this.state.submission && !this.state.content) ? <FlowDetails close={this.detailsClose}/> : null
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    events: (event) => dispatch(events(event)),
    isLoading: (load) => dispatch(isLoading(load)),
    employee: (emps) => dispatch(employee(emps)),
    flows: (flow) => dispatch(flows(flow)),
    forms: (form) => dispatch(forms(form)),
    submission: (submis) => dispatch(submission(submis))
  }
}

export default connect(null, mapDispatchToProps)(Index)