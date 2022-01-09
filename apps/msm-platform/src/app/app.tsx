import { GlobalStyles } from '@msm/ui'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '@msm/ui'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login/Login'
import ModuleLoader from '../components/ModuleLoader/ModuleLoader'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={ModuleLoader} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
