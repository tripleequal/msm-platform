import {
  createContext,
  HTMLAttributes,
  useCallback,
  useContext,
  useState,
} from 'react'
import { noop } from '../utils'

export type UserType = 'student' | 'teacher' | 'admin'

interface IUser {
  firstName: string
  lastName: string
  login: string
  type: UserType
}

interface IAuthData {
  user?: IUser | null
  token?: string | null
}

interface ILoginPayload {
  login: string
  password: string
}

interface IAuthContext extends IAuthData {
  tokenCheck: () => boolean
  login: (payload: ILoginPayload) => Promise<boolean>
  onLogout: () => void
  badToken: boolean
  fetchUser: () => void
}

const initialValues: IAuthContext = {
  user: null,
  tokenCheck: () => false,
  login: () => new Promise((resolve) => resolve(false)),
  onLogout: noop,
  badToken: false,
  fetchUser: noop,
}

const AuthenticationContext = createContext<IAuthContext>(initialValues)
const AUTH_KEY = '__msm_auth__'

export function AuthenticationContextProvider(
  props: HTMLAttributes<HTMLDivElement>
) {
  const [user, setUser] = useState<IUser | null | undefined>(null)
  const [badToken, setBadToken] = useState(false)

  const getToken = useCallback(() => {
    const authData = localStorage.getItem(AUTH_KEY)
    if (authData) {
      const parsed = JSON.parse(authData)
      return parsed.token
    } else {
      return null
    }
  }, [])

  const tokenCheck = useCallback(() => {
    return !!getToken()
  }, [getToken])

  const onLogin = useCallback((authData: IAuthData) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ token: authData.token }))
    console.log('user', authData.user)
    setUser(authData.user)
  }, [])

  const onLogout = () => {
    localStorage.removeItem(AUTH_KEY)
  }

  const fetchUser = useCallback(async () => {
    const user = await mockGetUserService(getToken())
    if (user) {
      setUser(user)
    } else {
      setBadToken(true)
    }
  }, [getToken, setBadToken])

  const login = async (payload: ILoginPayload) => {
    const response = await mockLoginService(payload)
    if (response) {
      onLogin(response)
    }

    return !!response
  }

  const values: IAuthContext = {
    ...initialValues,
    tokenCheck,
    user,
    login,
    onLogout,
    badToken,
    fetchUser,
  }

  return (
    <AuthenticationContext.Provider
      value={values}
      {...props}
    ></AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => useContext(AuthenticationContext)

function mockLoginService(
  payload: ILoginPayload
): Promise<IAuthData | undefined> {
  return new Promise<IAuthData | undefined>((resolve) => {
    setTimeout(() => {
      resolve(mockUsers.find((user) => user.user?.login === payload.login))
    }, 1000)
  })
}

const mockUsers: IAuthData[] = [
  {
    user: {
      firstName: 'Charlie',
      lastName: 'Brown',
      login: 'student',
      type: 'student',
    },
    token: 'fwewefowef',
  },
  {
    user: {
      firstName: 'Rick',
      lastName: 'Sanchez',
      login: 'admin',
      type: 'admin',
    },
    token: 'g44g3g3g',
  },
  {
    user: {
      firstName: 'Homer',
      lastName: 'Simpson',
      login: 'teacher',
      type: 'teacher',
    },
    token: 'jgoignrewg',
  },
]

function mockGetUserService(token: string) {
  return new Promise<IUser | undefined | null>((resolve) => {
    setTimeout(() => {
      resolve(mockUsers.find((user) => user.token === token)?.user)
    }, 500)
  })
}
