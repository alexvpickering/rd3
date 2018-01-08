import React from 'react'
import styled from 'styled-components'
import FooterNav from './FooterNav.js'
import Page from '../Page/Page.js'

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.color.hero};
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  padding: 40px;
  ${'' /* height: 200px; */}
`


const Footer = () => {
  return (
    <FooterContainer>
      <Page>
        <div>
          Alex Pickering is dedicated to making life long and healthy.
        </div>
        <FooterNav>
          <a href="/">About</a>
          <a href="/">Home</a>
          <a href="/">Github</a>
          <a href="/">Twitter</a>
        </FooterNav>
      </Page>
    </FooterContainer>
  )
}

export default Footer
