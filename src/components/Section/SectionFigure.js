import styled from 'styled-components'

const SectionFigure = styled.figure`
  display: block;
  margin: 0px;
  margin-bottom: 36px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    width: 55%;
    margin-bottom: 0;
  }

`
export default SectionFigure
