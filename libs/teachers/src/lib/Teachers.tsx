import { defaultTheme } from '@msm/ui'
import { ThemeProvider } from '@mui/system'
import { Route, Link } from 'react-router-dom'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface TeachersProps {}

const StyledTeachers = styled.div`
  color: pink;
`

export function Teachers(props: TeachersProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledTeachers>
        <h1>Welcome to Teachers!</h1>

        <ul>
          <li>
            <Link to="/">teachers root</Link>
          </li>
        </ul>
        <Route
          path="/"
          element={() => <div>This is the teachers root route.</div>}
        />
      </StyledTeachers>
    </ThemeProvider>
  )
}

export default Teachers
