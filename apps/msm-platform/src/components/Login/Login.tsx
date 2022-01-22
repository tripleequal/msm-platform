import { useAuthenticationContext } from '@msm/core'
import { Branding } from '@msm/ui'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  TypographyProps,
} from '@mui/material'
import { HTMLAttributes, useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import styled from 'styled-components'
import { border } from '@mui/system'

export default function Login() {
  const isDemo = false
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  // those jerks at react-router removed the ability to pass in a type definiton
  // for state. So now you have to do some hacky casting when you use it
  const location = useLocation()
  const { state } = location
  const { login } = useAuthenticationContext()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
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

      // here's the hacky casting that is mentioned above
      if ((state as { from: string })?.from) {
        window.location.href = (state as { from: string }).from
      } else {
        window.location.href = '/'
      }
    },
    [username, password, state, login]
  )

  const brandingTemplate = () => {
    return isDemo ? (
      <DemoPanel />
    ) : (
      <h2 className="branding-header pt-6">
        <Branding />
      </h2>
    )
  }

  return (
    <Stack
      className="full-height"
      justifyContent="center"
      alignItems="stretch"
      spacing={0}
    >
      <LoginGrid direction="row" justifyContent="center" alignItems="stretch">
        <Grid
          className="login-wrap"
          display="flex"
          direction="row"
          justifyContent="center"
        >
          <Grid
            className="login-box"
            display="flex"
            direction="row"
            alignItems="stretch"
          >
            <Grid
              className="box-left"
              display="flex"
              direction="column"
              alignItems="center"
            >
              {brandingTemplate()}
            </Grid>
            <Grid
              className="box-right"
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Grid component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LoginGrid>
    </Stack>
  )
}

const LoginGrid = styled(Grid)`
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  height: 243px;

  .login-wrap {
    width: 100%;
    border-top: 4px solid #a70d00;
    border-bottom: 4px solid #a70d00;
    height: 239px;
    text-align: center;

    .login-box {
      width: 700px;

      .branding-header {
        margin: 0;
        font-size: 2.8rem;
        font-weight: 300;
      }
    }
  }
`

function DemoPanel() {
  return (
    <div id="demo-panel" className="demo-panel">
      <h1 className="demo-header">Curriculum Overview</h1>
      <img
        src="https://demo.midschoolmath.com/assets/demo-image-2116454ff1cdb9c4f81fd2a834e66a59.png"
        width="350"
        alt=""
      />
      <Button
        href="https://msmapp.s3.amazonaws.com/assets/documents/MidSchoolMath-Catalog-Spring-2021.pdf"
        target="_blank"
        className="button red_button"
        rel="noreferrer"
      >
        Download
      </Button>
    </div>
  )
}
