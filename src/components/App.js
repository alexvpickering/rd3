import React from 'react'
import ReturnedAbcs from '../containers/ReturnedAbcs'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ReturnedAbcs}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default App
