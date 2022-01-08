import { Route, Link } from 'react-router-dom'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface AdminProps {}

const StyledAdmin = styled.div`
  color: pink;
`

export function Admin(props: AdminProps) {
  return (
    <StyledAdmin>
      <h1>Welcome to Admin!</h1>

      <ul>
        <li>
          <Link to="/">admin root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the admin root route.</div>} />
    </StyledAdmin>
  )
}

export default Admin
