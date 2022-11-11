import React, { Component } from 'react'    
import Search from './content/search'
import InnerContent from './content/innerContent'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Search />
        <InnerContent details={this.props.details}/>
      </div>
    )
  }
}
