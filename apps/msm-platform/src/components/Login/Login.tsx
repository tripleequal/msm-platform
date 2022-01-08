import { useAuthenticationContext } from '@msm/core'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
  const location = useLocation<{ from?: string }>()
  const { onLogin } = useAuthenticationContext()

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onLogin({
      user: { firstName: 'Garfield', lastName: 'The Cat', login: 'lasagna' },
      token: '332fofi3#@$2Fjaofidjsdfoij',
    })

    if (location.state.from) {
      window.location.href = location.state.from
    } else {
      window.location.href = '/'
    }
  }

  return (
    <StyledLogin onSubmit={handleLogin}>
      <h1>Welcome to Login!</h1>
      <input placeholder="login" />
      <input placeholder="password" type="password" />
      <button type="submit">Login</button>
    </StyledLogin>
  )
}

const StyledLogin = styled.form`
  color: pink;
`
