import styled from 'styled-components'
import Margins from './Margins'

const Heading = styled.h1`
  font-size: ${props => props.theme.font.xl};
  font-weight: 400;

  ${Margins}
`
export default Heading
