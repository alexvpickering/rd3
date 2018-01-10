import React from 'react'
import styled from 'styled-components'
import ActionLink from './ActionLink'
import ActionsPage from './ActionsPage'

const ActionsContainer = styled.div`
  background-color: ${props => props.theme.color.action};
`

const HeroActions = () => {
  return (
    <ActionsContainer>
      <ActionsPage>
        <ActionLink to="/">Home</ActionLink>
        <ActionLink to="/article">Latest</ActionLink>
        <ActionLink to="/archive">Archive</ActionLink>
      </ActionsPage>
    </ActionsContainer>
  )
}


export default HeroActions
