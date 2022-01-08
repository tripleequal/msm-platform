import { useAuthenticationContext } from '@msm/core'
import { Route, Link } from 'react-router-dom'

import styled from 'styled-components'

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
          <Link to="/">students root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the students root route.</div>}
      />
    </StyledStudents>
  )
}

export default Students
