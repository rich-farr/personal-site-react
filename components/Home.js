import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  render() {
		return (
		  <div id="home">
        <h2>This is the Home component</h2>
        <div id="home-links">
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/resume" activeClassName="active">Resume</Link>
          <Link to="/projects" activeClassName="active">Projects</Link>
          <a href="https://nz.linkedin.com/in/rich-farr-web-dev" target="_blank">LinkedIn</a>
          <a href="https://github.com/rich-farr" target="_blank">Github</a>
          <a href="#" target="_blank">Email</a>
        </div>
		  </div>
		)
	}
}

export default Home
