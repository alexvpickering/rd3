import styled from 'styled-components'

const Section = styled.div`
  background: #f4f4f4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 300px;
  padding: 24px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    padding: 80px 0;
  }

  h2 {
    font-size: ${props => props.theme.font.lg};
    margin: 0;
    font-weight: 400;
  }

  p {
    margin-bottom: 40px;
  }
`
export default Section
