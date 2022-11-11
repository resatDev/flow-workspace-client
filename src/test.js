import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Test extends Component {
  render() {
    return (
      <div className="selectingForm">
        <div className="whiteArea">
          <div className="formArea">
            <div className="formItem">
              <Link to="/flow-builder">
                <div  className="link">osman</div>
                <div className="id">26523213151651</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


