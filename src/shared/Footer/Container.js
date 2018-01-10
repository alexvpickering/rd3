import styled from 'styled-components'

const Container = styled.footer`
  background-color: ${props => props.theme.color.hero};
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  padding: 40px;
  ${'' /* height: 200px; */}
`

export default Container
