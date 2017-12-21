import React from 'react'
import ReturnedAbcs from '../containers/ReturnedAbcs'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ReturnedAbcs}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default App
