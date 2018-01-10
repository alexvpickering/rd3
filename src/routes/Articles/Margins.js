import { css } from 'styled-components'

const Margins = css`
  margin-left: 24px;
  margin-right: 24px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    margin-left: auto;
    margin-right: auto;
    width: 680px;
  }

`

export default Margins
