import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { backendFlows } from '../../../../api/restApi/api'

export default class FormItem extends Component {
  createFlow = async () => {
    await backendFlows('create', {
      admin: localStorage.getItem('admin_id'),
      flowTitle: this.props.form.title,
      formId: this.props.form.id,
      status: 'active',
    }).then(res => {
      localStorage.setItem('flow_id', res.data.status)
    })
  }
  render() {
    return (
      <div className="formItem" onClick={
        () =>
        {
          localStorage.setItem('form_id', this.props.form.id)
          this.createFlow()
        }}>
        <Link to={`/flow/${this.props.form.id}`}>
          <div  className="link">{this.props.form.title}</div>
          <div className="id">{this.props.form.id}</div>
        </Link>
      </div>
    )
  }
}
