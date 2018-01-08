import styled from 'styled-components'
import ArticleMargins from './ArticleMargins.js'

const ArticleByline = styled.div`
  font-size: 12px;
  line-height: 1.5;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
  padding: 12px 0;

  ${ArticleMargins}
`
export default ArticleByline
