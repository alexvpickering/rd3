import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.hover};
  }
`

export default NavItemLink
