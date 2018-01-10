import styled from 'styled-components'

const Section = styled.div`
  background: ${props => props.theme.color.altwhite};
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

  hr {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
`
export default Section
