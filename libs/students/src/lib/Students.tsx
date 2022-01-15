import { useAuthenticationContext } from '@msm/core'
import { Route, Link, Redirect, Switch, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Portfolio from './Portfolio/Portfolio'

/* eslint-disable-next-line */
export interface StudentsProps {}

function StudentRoutes() {
  return (
    <Switch>
      <Redirect path="/" exact to="/portfolio" />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  )
}

function StudentNavigation() {
  return (
    <ul>
      <li>
        <StyledNavLink foo to="/portfolio" isActive={(match) => !!match}>
          Portfolio
        </StyledNavLink>
      </li>
    </ul>
  )
}

export default function Students(props: StudentsProps) {
  const { user } = useAuthenticationContext()
  return (
    <>
      {StudentRoutes}
      <ComponentContent>
        <h1>Welcome to Students!</h1>
        {StudentNavigation}
      </ComponentContent>
    </>
  )
}

const ComponentContent = styled.div`
  color: pink;
`

const StyledNavLink = styled(NavLink)<{ foo: boolean }>`
  ${({ foo }) => (foo ? '' : '')}
`
