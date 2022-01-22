import * as ReactDOM from 'react-dom'

import App from './app/app'
import { BrowserRouter } from 'react-router-dom'
import { AuthenticationContextProvider } from '@msm/core'

ReactDOM.render(
  <BrowserRouter>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
