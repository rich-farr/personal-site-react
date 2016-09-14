import React, { Component } from 'react'
import Navbar from './navbar'

class App extends React.Component {
  render() {
		return (
		  <div id="container">
		    <Navbar title="Rich Farr, W.D."/>
					{this.props.children}
		  </div>
		)
	}
}

export default App
