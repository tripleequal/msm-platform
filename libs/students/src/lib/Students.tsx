import { useAuthenticationContext } from '@msm/core'
import { defaultTheme } from '@msm/ui'
import { ThemeProvider } from '@mui/system'
import { Route, Navigate, Routes, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Portfolio from './Portfolio/Portfolio'

/* eslint-disable-next-line */
export interface StudentsProps {}

function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/portfolio" />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

function StudentNavigation() {
  return (
    <ul>
      <li>
        <StyledNavLink
          foo
          to="/portfolio"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Portfolio
        </StyledNavLink>
      </li>
    </ul>
  )
}

export function Students(props: StudentsProps) {
  const { user } = useAuthenticationContext()
  return (
    <ThemeProvider theme={defaultTheme}>
      <ComponentContent>
        <h1>Welcome to Students!</h1>

        <ul>
          <li>
            <StyledNavLink
              foo
              to="/portfolio"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Portfolio
            </StyledNavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Navigate replace to="/portfolio" />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ComponentContent>
    </ThemeProvider>
  )
}

const ComponentContent = styled.div`
  color: pink;
`

const StyledNavLink = styled(NavLink)<{ foo: boolean }>`
  ${({ foo }) => (foo ? '' : '')}
`
