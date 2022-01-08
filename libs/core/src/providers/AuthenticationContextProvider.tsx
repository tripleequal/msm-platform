import { createContext, HTMLAttributes, useContext, useState } from 'react'
import { noop } from '../utils'

interface IUser {
  firstName: string
  lastName: string
  login: string
}

interface IAuthData {
  user?: IUser | null
  token?: string | null
}

interface IAuthContext extends IAuthData {
  tokenCheck: () => boolean
  onLogin: (authData: IAuthData) => void
}

const initialValues: IAuthContext = {
  user: null,
  tokenCheck: () => false,
  onLogin: noop,
}

const AuthenticationContext = createContext<IAuthContext>(initialValues)
const AUTH_KEY = '__msm_auth__'

export function AuthenticationContextProvider(
  props: HTMLAttributes<HTMLDivElement>
) {
  const [user, setUser] = useState<IUser | null | undefined>(null)

  const tokenCheck = () => {
    const authData = localStorage.getItem(AUTH_KEY)
    if (authData) {
      const parsed = JSON.parse(authData)
      return !!parsed.token
    } else {
      return false
    }
  }

  const onLogin = (authData: IAuthData) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ token: authData.token }))
    setUser(authData.user)
  }

  const values: IAuthContext = { ...initialValues, tokenCheck, onLogin, user }

  return (
    <AuthenticationContext.Provider
      value={values}
      {...props}
    ></AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => useContext(AuthenticationContext)
