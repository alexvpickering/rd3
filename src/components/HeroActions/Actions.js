import React from 'react'
import styled from 'styled-components'

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  background-color: DodgerBlue;
  ${'' /* background-color: ${props => props.theme.color.action}; */}

  a {
    background-color: green;
    text-decoration: none;
    font-size: 30px;
    color: ${props => props.theme.color.white};
    border-right: solid 1px rgba(255, 255, 255, 0.1);

    ${'' /* &:last-child {
      border-right: none;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    } */}
  }

`


export default HeroActions
