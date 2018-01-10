import styled from 'styled-components'

const Nav = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;

  a {
    color: rgba(255, 255, 255, 0.8);
    margin-right: 6px;

    &:last-child {
      margin-right: 0px;
    }
  }
`
export default Nav
