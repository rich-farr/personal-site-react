import React, { Component } from 'react'
import Nav from './Nav'

class App extends React.Component {
  render() {
		return (
		  <div id="container">
		    <Nav title="Rich Farr, W.D."/>
					{this.props.children}
		  </div>
		)
	}
}

export default App
