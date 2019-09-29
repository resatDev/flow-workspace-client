import React, { Component } from 'react'

export default class ImageArea extends Component {
    render() {
        return (
            <div className="image">
                <div className="close" onClick={this.props.close}>X</div>
            </div>
        )
    }
}
