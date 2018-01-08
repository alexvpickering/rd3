import styled from 'styled-components'
import ArticleMargins from './ArticleMargins.js'

const ArticleParagraph = styled.p`
  margin-bottom: 24px;

  @media (min-width: ${props => props.theme.breaks.md}) {
    font-size: 18px;
  }

  ${ArticleMargins}


`
export default ArticleParagraph
