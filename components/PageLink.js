import React, { Component } from 'react'
import { Link } from 'react-router'

let PageLink = (props) => {
  if (props.is_url) {
  	return (
  	  <div className={props.source + "-link"} id={props.source + "-" + props.value.toLowerCase() + "-link"}>
        <a href={props.path} target="_blank"><img src={props.image} alt={props.value} /></a>
  	  </div>
  	)
  } else {
    return (
      <div className={props.source + "-link"} id={props.source + "-" + props.path + "-link"}>
        <Link to={"/" + props.path} activeClassName="active">{props.value}</Link>
      </div>
    )
  }
}

export default PageLink
