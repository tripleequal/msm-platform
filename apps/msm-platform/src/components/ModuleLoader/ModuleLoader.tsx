import { Admin } from '@msm/admin'
import { useAuthenticationContext } from '@msm/core'
import { Students } from '@msm/students'
import { Teachers } from '@msm/teachers'
import { Redirect, useLocation } from 'react-router-dom'

export default function ModuleLoader() {
  const { tokenCheck, user, badToken, onLogout, fetchUser } =
    useAuthenticationContext()
  const location = useLocation()

  if (!tokenCheck() || badToken) {
    onLogout()
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      />
    )
  }

  if (!user) {
    fetchUser()
    return <div>Loading app...</div>
  }

  switch (user.type) {
    case 'admin':
      return <Admin />
    case 'teacher':
      return <Teachers />
    case 'student':
      return <Students />
    default:
      return <div>There was a problem</div>
  }
}
