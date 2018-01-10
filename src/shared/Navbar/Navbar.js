import React from 'react'
import NavList from './List'
import ListItem from './ListItem'
import Logo from './Logo'
import ItemLink from './ItemLink'
import Header from './Header.js'


const Navbar = () => {
  return (
    <Header>
      <Logo to="/">
      <svg viewBox="0 0 22.538662 38.038109">
       <g transform="translate(-73 -1e2)">
        <g transform="matrix(.67 0 0 .67 28 42)" >
         <path d="m84 1.2e2 -5.4-9.4-5.4-9.4h11 11l-5.4 9.4z"/>
         <path d="m84-1.2e2 -5.4-9.4-5.4-9.4h11 11l-5.4 9.4z" transform="scale(1,-1)"/>
        </g>
       </g>
      </svg>
      ap bioinformatics
    </Logo>
    <NavList>
      <ListItem>
        <ItemLink to="/">blog</ItemLink>
      </ListItem>
      <ListItem>
        <ItemLink to="/">about</ItemLink>
      </ListItem>
    </NavList>
  </Header>
)
}


export default Navbar
