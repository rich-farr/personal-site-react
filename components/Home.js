import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../db/links.json'
import PageLink from './PageLink'

const links = data.links

class Home extends React.Component {
  render() {
		return (
		  <div id="home">
        <h2>This is the Home component</h2>
        <div id="home-links">

        </div>
		  </div>
		)
	}
}

export default Home
