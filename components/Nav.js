import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

class Nav extends React.Component {
  render() {
		return (
      <nav>
        <div id="nav-heading">
          <h1>{this.props.title}</h1>
        </div>
        <div id="nav-links">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/resume" activeClassName="active">Resume</Link>
          <Link to="/projects" activeClassName="active">Projects</Link>
        </div>
      </nav>
		)
	}
}

export default Nav
