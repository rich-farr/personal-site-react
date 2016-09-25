import React, { Component } from 'react'
import { Link } from 'react-router'

let PageLink = (props) => {
  console.log("MOO", props)
  if (props.is_url) {
  	return (
  	  <div class="page-link">
        <h2>This is an external Link component</h2>
  	  </div>
  	)
  } else {
    return (
      <div class="page-link">
        <h2>This is an internal Link component</h2>
      </div>
    )
  }
}

export default PageLink

// let Book = (props) => {
//   let linkTo = "/books/" + props.id
//   return (
//     <div className="book">
//       <div className="cover-image">
//         <img src={props.image} />
//       </div>
//       <div className="book-content">
//         <h1><Link to={linkTo}>{props.title} ({props.year})</Link></h1>
//         <h3>{props.author}</h3>
//       </div>
//     </div>
//     )
// }
