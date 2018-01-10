import styled from 'styled-components'

const Meta = styled.div`
  font-size: ${props => props.theme.font.sm};
  line-height: 1.4em;
  margin-bottom: 18px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    float: left;
    width: 15%;
    margin-top: 8px;
  }
`
export default Meta
