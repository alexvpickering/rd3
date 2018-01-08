import styled from 'styled-components'
import ArticleMargins from './ArticleMargins.js'

const ArticleHeading = styled.h1`
  font-size: ${props => props.theme.font.xl};
  font-weight: 400;

  ${ArticleMargins}
`
export default ArticleHeading
