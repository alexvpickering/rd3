import React from 'react'
import styled from 'styled-components'
import { padx } from '../../utils/padX.js'

const Hero = styled.div`
  background-color: ${props => props.theme.color.hero};
  font-size: ${props => props.theme.font.xlarge};
  color: white;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    font-size: ${props => props.theme.font.xxlarge};
  }

  ${padx}

`


export default Hero
