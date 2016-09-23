import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  render() {
		return (
		  <div id="home">
        <h2>This is the Home component</h2>
        <div id="home-links">
          <div className="home-link" id="about-link">
            <Link to="/about" activeClassName="active">About</Link>
          </div>
          <div className="home-link" id="resume-link">
            <Link to="/resume" activeClassName="active">Resume</Link>
          </div>
          <div className="home-link" id="projects-link">
            <Link to="/projects" activeClassName="active">Projects</Link>
          </div>
          <div className="home-link" id="linkedin-link">
            <a href="https://nz.linkedin.com/in/rich-farr-web-dev" target="_blank">LinkedIn</a>
          </div>
          <div className="home-link" id="github-link">
            <a href="https://github.com/rich-farr" target="_blank">Github</a>
          </div>
          <div className="home-link" id="email-link">
            <a href="mailto:scarletmanuka@gmail.com">Email</a>
          </div>
        </div>
		  </div>
		)
	}
}

export default Home
