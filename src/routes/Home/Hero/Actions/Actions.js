import React from 'react'
import styled from 'styled-components'
import ActionLink from './ActionLink'
import ActionsPage from './ActionsPage'

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.action};
`

const HeroActions = () => {
  return (
    <Wrapper>
      <ActionsPage>
        <ActionLink to="/">Home</ActionLink>
        <ActionLink to="/article">Latest</ActionLink>
        <ActionLink to="/archive">Archive</ActionLink>
      </ActionsPage>
    </Wrapper>
  )
}


export default HeroActions
