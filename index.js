import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'

render((
	<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
	    <Route path='/about' component={About}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/projects' component={Projects}/>
    </Route>
  </Router>
  ),
  document.querySelector('main')
)

console.log('welcome to my new Personal site built with react')
