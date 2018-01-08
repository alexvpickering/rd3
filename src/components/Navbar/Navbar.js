import React from 'react'
import styled from 'styled-components'
import NavList from './NavList'
import NavItem from './NavItem'
import NavBrand from './NavBrand'
import NavItemLink from './NavItemLink.js'

// wrapper for Navbar
const NavHead = styled.header`
padding: 8px 16px;
background-color: ${props => props.theme.color.navbar};
`


const Navbar = () => {
  return (
    <NavHead>
      <NavBrand to="/">
      <svg viewBox="0 0 22.538662 38.038109">
       <g transform="translate(-73 -1e2)">
        <g transform="matrix(.67 0 0 .67 28 42)" >
         <path d="m84 1.2e2 -5.4-9.4-5.4-9.4h11 11l-5.4 9.4z"/>
         <path d="m84-1.2e2 -5.4-9.4-5.4-9.4h11 11l-5.4 9.4z" transform="scale(1,-1)"/>
        </g>
       </g>
      </svg>
      ap bioinformatics
    </NavBrand>
    <NavList>
      <NavItem>
        <NavItemLink to="/">blog</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/">about</NavItemLink>
      </NavItem>
    </NavList>
  </NavHead>
)
}


export default Navbar
