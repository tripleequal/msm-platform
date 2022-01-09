import { useAuthenticationContext } from '@msm/core'
import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation<{ from?: string }>()
  const { login } = useAuthenticationContext()

  const handleLogin: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      setLoginLoading(true)
      setLoginError('')
      e.preventDefault()
      const loggedIn = await login({ login: username, password: password })
      setLoginLoading(false)

      if (!loggedIn) {
        setLoginError('There was a problem logging you in')
        return
      }

      setLoginError('')

      if (location.state.from) {
        window.location.href = location.state.from
      } else {
        window.location.href = '/'
      }
    },
    [username, password, location, login]
  )

  return (
    <StyledLogin onSubmit={handleLogin}>
      <h1>Welcome to Login!</h1>
      {loginLoading && <div>Logging you in...</div>}
      {loginError && <div>There was a problem logging in.</div>}
      <input
        placeholder="login"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </StyledLogin>
  )
}

const StyledLogin = styled.form`
  color: pink;
`
