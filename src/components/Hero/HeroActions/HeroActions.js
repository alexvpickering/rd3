import React from 'react'
import styled from 'styled-components'
import ActionLink from './ActionLink'
import ActionsPage from './ActionsPage'

const ActionsContainer = styled.div`
  background-color: ${props => props.theme.color.action};
  padding: 20px 0;
`

const HeroActions = () => {
  return (
    <ActionsContainer>
      <ActionsPage>
        <ActionLink to="/">Home</ActionLink>
        <ActionLink to="/article">Article</ActionLink>
        <ActionLink to="/">Third Link</ActionLink>
      </ActionsPage>
    </ActionsContainer>
  )
}


export default HeroActions
