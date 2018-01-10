import styled from 'styled-components'

const PostPreview = styled.a`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 0;
  text-decoration: none;
  display: block;
  color: black;
  height: 200px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

`

export default PostPreview
