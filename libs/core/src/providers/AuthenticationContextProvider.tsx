import { createContext, HTMLAttributes, useContext } from 'react'

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
}

const initialValues: IAuthContext = {
  user: null,
  tokenCheck: () => false,
}

const AuthenticationContext = createContext<IAuthContext>(initialValues)

export function AuthenticationContextProvider(
  props: HTMLAttributes<HTMLDivElement>
) {
  const tokenCheck = () => {
    const authData = localStorage.getItem('__msm_auth__')
    if (authData) {
      const parsed = JSON.parse(authData)
      return !!parsed.token
    } else {
      return false
    }
  }

  const values: IAuthContext = { ...initialValues, tokenCheck }

  return (
    <AuthenticationContext.Provider
      value={values}
      {...props}
    ></AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => useContext(AuthenticationContext)
