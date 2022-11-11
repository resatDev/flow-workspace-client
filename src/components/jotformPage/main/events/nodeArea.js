import React, { Component } from 'react'
import EventNode from './eventNode'
import { connect } from 'react-redux'

class NodeArea extends Component {
  render() {
    return (
      <div className="eventNodes">
        { 
          (!this.props.loading) ? 'Loading...' : 
            this.props.events.map(event => {
              return <EventNode event={event} key={event.id}/>
            })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.eventReducer,
    loading: state.loadingReducer
  }
}

export default connect(mapStateToProps)(NodeArea)
