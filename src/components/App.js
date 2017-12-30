import React, { Component } from 'react'
import ReturnedAbcs from '../containers/ReturnedAbcs'
import About from './About'
import Play from './Play'
import '../styles.css'

import {
  Button,
  Menu,
  Container,
} from 'semantic-ui-react'

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
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} as={Link} onClick={this.handleItemClick} to="/">Home</Menu.Item>
          <Menu.Item name='about' active={activeItem === 'about'} as={Link} onClick={this.handleItemClick} to="/about">About</Menu.Item>
          <Menu.Item name='play' active={activeItem === 'play'} as={Link} onClick={this.handleItemClick} to="/play">Play</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button basic>Log in</Button>
              <Button primary style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Container>
          <Route exact path="/" component={ReturnedAbcs}/>
          <Route path="/about" component={About}/>
          <Route path="/play" component={Play}/>
        </Container>
      </div>
    </Router>
    )
  }
}
