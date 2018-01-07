import React from 'react'
import styled from 'styled-components'

const ActionLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  padding: 30px 0;

  @media (min-width: 1024px) {
    padding: 40px 12px;
    border-right: solid 1px rgba(255, 255, 255, 0.1);
    border-bottom: none;
    text-align: center;
    width: 400px;
  }

  &:last-child {
    border-right: none;

  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }


}

`


export default ActionLink
