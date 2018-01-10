import styled from 'styled-components'

const Page = styled.div`
  box-sizing: border-box;
  margin-left: 24px;
  margin-right: 24px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    margin-left: 72px;
    margin-right: 72px;
  }

  @media (min-width: ${props => props.theme.breaks.lg}) {
    width: 984px;
    margin-left: auto;
    margin-right: auto;
  }


`

export default Page
