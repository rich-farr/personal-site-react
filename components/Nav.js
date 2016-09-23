import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

class Nav extends React.Component {
  render() {
		return (
      <nav>
        <div className="nav-button">
          <button className="nav-burger">Click 4 Nav</button>
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
