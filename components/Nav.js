import React, { Component } from 'react'

class Navbar extends React.Component {
  render() {
		return (
		  <div id="navbar">
		    <h1>{this.props.title}</h1>
		  </div>
		)
	}
}

export default Navbar
