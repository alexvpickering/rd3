import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  background-color: ${props => props.theme.color.hero};
  font-size: ${props => props.theme.font.lg};
  color: white;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: ${props => props.theme.breaks.sm}) {
    font-size: ${props => props.theme.font.xl};
    padding-top: 80px;
    padding-bottom: 80px;
  }


  @media (min-width: ${props => props.theme.breaks.md}) {
    font-size: ${props => props.theme.font.xxl};
  }
`
export default Hero
