import React, { Component } from 'react'
import FormItem from './formItem'
import { connect } from 'react-redux'

class SelectingForm extends Component {
  render() {
    return (
      <div className="selectingForm">
        <div className="close" onClick={this.props.close}> X </div>
        <div className="whiteArea">
          <div className="formArea">
            {
              (!this.props.loading) ? 'Loading...' : 
                this.props.forms.map(form => {
                  return <FormItem form={form} key={form.id}/>
                })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    forms: state.formReducer,
    loading: state.loadingReducer
  }
}

export default connect(mapStateToProps, null)(SelectingForm)