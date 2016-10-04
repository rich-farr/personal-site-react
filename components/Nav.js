import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import data from '../db/links.json'
import PageLink from './PageLink'

const links = data.links

class Nav extends React.Component {
  render() {
		return (
      <nav>
        <div id="nav-links">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {links.map(function(link, index) {
            return (
              <div key = {index}>
                <PageLink
                id = {link.id}
                is_url = {link.is_url}
                path = {link.path}
                value = {link.value}
                source = "nav"
                />
              </div>
            )
          })}
        </div>
      </nav>
		)
	}
}

export default Nav
