import styled from 'styled-components'

const NavItem = styled.li`
  float: right;
  display: block;
  color: ${props => props.theme.color.white};
  padding: 10.5px;

  /* breakpoint for nav */
  @media screen and (max-width: ${props => props.theme.breaks.navbar}) {
    float: none;
    text-align: center;
  }
`

export default NavItem
