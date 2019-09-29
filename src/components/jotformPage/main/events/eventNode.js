import React, { Component } from 'react'

export default class EventNode extends Component {
    render() {
        return (
            <div className="eventNode">
                <div className="name">{this.props.event.owner}</div>
                <div className="time">{this.props.event.created}</div>
                <div className="def">{this.props.event.def}</div>
            </div>
        )
    }
}
