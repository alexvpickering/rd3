import React from 'react'
import styled from 'styled-components'
import NavList from './NavList'
import NavItem from './NavItem'
import NavBrand from './NavBrand'


// wrapper for Navbar
const NavHead = styled.header`
padding: 8px 16px;
background-color: ${props => props.theme.color.navbar};
`


const Navbar = () => {
  return (
    <NavHead>
      <NavBrand href="/">
      <svg viewBox="-607 419 64 64">
        <path d="M-573.4,478.9c-8,0-14.6-6.4-14.6-14.5s14.6-25.9,14.6-40.8c0,14.9,14.6,32.8,14.6,40.8S-565.4,478.9-573.4,478.9z"></path>
      </svg>
      ap bioinformatics
    </NavBrand>
    <NavList>
      <NavItem><a href="/">blog</a></NavItem>
      <NavItem><a href="/">about</a></NavItem>
    </NavList>
  </NavHead>
)
}


export default Navbar
