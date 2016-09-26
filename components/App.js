import React, { Component } from 'react'
import Nav from './Nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: this.props.route.path,
      isHome: ''
    }
  }

  checkHome() {
    if (this.state.path === '/') {
      this.setState({isHome: true})
    } else {
      this.setState({isHome: false})
    }
  }

  render() {
    let navHeader = this.state.isHome ? '' : <Nav />
		return (
		  <div id="container" onLoad={this.checkHome.bind(this)}>
		    {navHeader}
				{this.props.children}
		  </div>
		)
	}
}

export default App
