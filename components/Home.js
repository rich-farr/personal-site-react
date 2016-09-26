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
          {links.map(function(link, index) {
            return (
              <div key = {index}>
                <PageLink
                  id = {link.id}
                  is_url = {link.is_url}
                  path = {link.path}
                  value = {link.value}
                  source = "home" 
                />
              </div>
            )
          })}
        </div>
		  </div>
		)
	}
}

export default Home
