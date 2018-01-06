import styled from 'styled-components'

const NavBrand = styled.a`
  float: left;
  color: ${props => props.theme.color.white};
  text-decoration: none;
  padding-top: 2px; /* vertical align brand and links */

  svg {
    width: 24px;
    position: relative;
    top: 4px;
    stroke: currentColor;
    stroke-width: 3px;
    fill: none;
    padding-right: 5px;

  }
  /* breakpoint for nav */
  @media screen and (max-width: ${props => props.theme.breaks.navbar}) {
    display: block;
    float: none;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
  }

  &:hover {
    color: ${props => props.theme.color.hover};
  }
`

export default NavBrand
