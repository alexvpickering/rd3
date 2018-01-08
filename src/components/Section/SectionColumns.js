import styled from 'styled-components'

const Columns = styled.div`

  @media (min-width: ${props => props.theme.breaks.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`

export default Columns
