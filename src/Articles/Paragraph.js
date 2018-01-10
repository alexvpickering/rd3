import styled from 'styled-components'
import Margins from './Margins'

const Paragraph = styled.p`
  margin-bottom: 24px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    font-size: 18px;
  }

  ${Margins}


`
export default Paragraph
