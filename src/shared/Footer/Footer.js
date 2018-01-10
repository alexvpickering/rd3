import React from 'react'
import Nav from './Nav'
import Page from '../Page'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
    <Wrapper>
      <Page>
        <div>
          Alex Pickering is dedicated to making life long and healthy.
        </div>
        <Nav>
          <a href="/">About</a>
          <a href="/">Home</a>
          <a href="/">Github</a>
          <a href="/">Twitter</a>
        </Nav>
      </Page>
    </Wrapper>
  )
}

export default Footer
