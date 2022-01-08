import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './app/app'
import { Router } from 'react-router-dom'
import { AuthenticationContextProvider } from '@msm/core'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </Router>,
  document.getElementById('root')
)
