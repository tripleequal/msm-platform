import { useAuthenticationContext } from '@msm/core'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  TypographyProps,
} from '@mui/material'
import { HTMLAttributes, useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import styled from 'styled-components'

export default function Login() {
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation<{ from?: string }>()
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

      if (location.state.from) {
        window.location.href = location.state.from
      } else {
        window.location.href = '/'
      }
    },
    [username, password, location, login]
  )

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="email"
            autoComplete="email"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
