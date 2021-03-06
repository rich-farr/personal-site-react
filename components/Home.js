import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../db/links.json'
import PageLink from './PageLink'

const links = data.links

class Home extends React.Component {
  render() {
		return (
		  <div id="home">
        <img src="http://placehold.it/350x150" />
        <div id="home-links">
          {links.map(function(link, index) {
            return (
              <div key = {index} className="home-link-container">
                <PageLink
                  id = {link.id}
                  is_url = {link.is_url}
                  path = {link.path}
                  value = {link.value}
                  image = {link.image}
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
