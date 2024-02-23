import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { createContext, useState } from 'react'
import userPool from './userPool'

// Account Context object - stores initial values for authentication context
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

// Account object - contains methods to authenticate the user
const Account = (props: any) => {
  const [authenticated, setAuthenticated] = useState(false)

  // Will get the current session of the user from the user pool
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

  // Will authenticate the user by checking the username and password entered are correct
  const authenticate = async (Username: string, Password: string) => {
    return await new Promise((resolve, reject) => {
      try {
        const user = new CognitoUser({
          Username: Username,
          Pool: userPool,
        })

        const authDetails = new AuthenticationDetails({
          Username: Username,
          Password: Password,
        })

        // Handle success, failure and password change required
        user.authenticateUser(authDetails, {
          onSuccess: (data) => {
            console.log('onSuccess: ', data)
            setAuthenticated(true)
            resolve(data)
          },
          onFailure: (err) => {
            console.error('onFailure: ', err)
            reject('Incorrect Username or Password')
          },
          newPasswordRequired: (data) => {
            console.log('newPasswordRequired: ', data)
            setAuthenticated(false)
            resolve(data)
          },
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  // Handle the logout method
  const logout = () => {
    const user = userPool.getCurrentUser()
    if (user) {
      setAuthenticated(false)
      user.signOut()
    }
  }

  // Create the account context and create all children with the context
  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, authenticated }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export { Account, AccountContext }
