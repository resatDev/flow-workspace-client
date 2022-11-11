import React, { Component } from 'react'
import NotifContent from '../notification/notifContent'
import { connect } from 'react-redux'


class InnerContent extends Component {
  render() {
    return (
      <div className="innerContent">
        {
          (!this.props.loading) ? 'loading...' : 
            this.props.flows.map(flow => {
              return <NotifContent flow={flow} key={flow.id} details={this.props.details}/>
            })
                   
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flows: state.flowReducer,
    loading: state.loadingReducer
  }
}

export default connect(mapStateToProps)(InnerContent)



