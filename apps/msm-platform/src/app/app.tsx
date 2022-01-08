// Material UI https://mui.com/getting-started/installation/

import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login/Login'
import ModuleLoader from '../components/ModuleLoader/ModuleLoader'

export function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={ModuleLoader} />
    </Switch>
  )
}

export default App
