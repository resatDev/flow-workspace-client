import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" name='search' placeholder="Search..."/>
      </div>
    )
  }
}
