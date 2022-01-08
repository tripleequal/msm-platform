import { useAuthenticationContext } from '@msm/core'
import { Route, Link, Redirect, Switch, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Portfolio from './Portfolio/Portfolio'

/* eslint-disable-next-line */
export interface StudentsProps {}

const StyledStudents = styled.div`
  color: pink;
`

export function Students(props: StudentsProps) {
  const { user } = useAuthenticationContext()
  return (
    <StyledStudents>
      <h1>Welcome to Students!</h1>

      <ul>
        <li>
          <StyledNavLink foo to="/portfolio" isActive={(match) => !!match}>
            Portfolio
          </StyledNavLink>
        </li>
      </ul>

      <Switch>
        <Redirect path="/" exact to="/portfolio" />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </StyledStudents>
  )
}

const StyledNavLink = styled(NavLink)<{ foo: boolean }>`
  ${({ foo }) => (foo ? '' : '')}
`

export default Students
