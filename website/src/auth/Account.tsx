import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { createContext, useState } from 'react'
import userPool from './userPool'
import usePagination from '@mui/material/usePagination/usePagination'

const AccountContext = createContext({
  authenticate: async (
    Username: string,
    Password: string
  ): Promise<unknown> => {
    throw new Error('authenticate function is not yet initialized')
  },
  getSession: async (): Promise<unknown> => {
    throw new Error('getSession function is not yet initialised')
  },
  logout: () => {},
  authenticated: false,
})

const Account = (props: any) => {
  const [authenticated, setAuthenticated] = useState(false)

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = userPool.getCurrentUser()
      if (user) {
        user.getSession((err: any, session: any) => {
          if (err) {
            reject(err)
          } else {
            resolve(session)
          }
        })
      } else {
        reject()
      }
    })
  }

  const authenticate = async (Username: string, Password: string) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: Username,
        Pool: userPool,
      })

      const authDetails = new AuthenticationDetails({
        Username: Username,
        Password: Password,
      })

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess: ', data)
          setAuthenticated(true)
          resolve(data)
        },
        onFailure: (err) => {
          console.error('onFailure: ', err)
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data)
          setAuthenticated(false)
          resolve(data)
        },
      })
    })
  }

  const logout = () => {
    const user = userPool.getCurrentUser()
    if (user) {
      setAuthenticated(false)
      user.signOut()
    }
  }

  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, authenticated }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export { Account, AccountContext }
