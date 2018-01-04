import React, { Component } from 'react'
import ReturnedAbcs from '../containers/ReturnedAbcs'
import About from './About'
import Play from './Play'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Router>
          <div>
          <Link
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            to="/">
            Home
          </Link>
          <Link
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            to="/about">
            About
          </Link>
          <Link
            name='play'
            active={activeItem === 'play'}
            onClick={this.handleItemClick}
            to="/play">
            Play
          </Link>

          <Route exact path="/" component={ReturnedAbcs}/>
          <Route path="/about" component={About}/>
          <Route path="/play" component={Play}/>
      </div>
    </Router>
    )
  }
}
