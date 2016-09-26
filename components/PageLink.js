import React, { Component } from 'react'
import { Link } from 'react-router'

let PageLink = (props) => {
  if (props.is_url) {
  	return (
  	  <div className="home-link" id={props.value.toLowerCase() + "-link"}>
        <a href={props.path} target="_blank">{props.value}</a>
  	  </div>
  	)
  } else {
    return (
      <div className="home-link" id={props.path + "-link"}>
        <Link to={"/" + props.path} activeClassName="active">{props.value}</Link>
      </div>
    )
  }
}

export default PageLink
