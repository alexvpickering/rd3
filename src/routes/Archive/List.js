import styled from 'styled-components'

const List = styled.div`

  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    margin-top: 60px;
  }

`

export default List
