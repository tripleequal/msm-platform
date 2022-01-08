import { useAuthenticationContext } from '@msm/core'
import { Students } from '@msm/students'
import { Redirect, useLocation } from 'react-router-dom'

export function App() {
  const { tokenCheck } = useAuthenticationContext()
  const location = useLocation()

  if (tokenCheck()) {
    return <Students />
  }

  return <Redirect to={{ pathname: '/login', state: { from: location } }} />
}

export default App
