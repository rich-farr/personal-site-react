import React, { Component } from 'react'
import Nav from './Nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: this.props.route.path,
      isHome: null
    }
  }

  componentDidMount() {
    this.onChange(this.state.path)
    console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
     let childPath = newProps.children.props.route.path
     if (childPath !== undefined) {
       this.onChange(childPath)
     } else this.onChange('/')
  }

  onChange(path) {
    if (path === '/') {
      this.setState({isHome: true})
    } else {
      this.setState({isHome: false})
    }
  }

  render() {
    let navHeader = this.state.isHome ? null : <Nav />
		return (
		  <div id="container" ref="foo">
		    {navHeader}
				{this.props.children}
		  </div>
		)
	}
}

export default App
