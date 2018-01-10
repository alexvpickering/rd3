import styled from 'styled-components'

const Image = styled.img`
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`
export default Image
