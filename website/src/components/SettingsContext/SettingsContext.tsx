import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { unsubscribe } from 'diagnostics_channel'
import { createContext, useState } from 'react'

type StyleOptions = 'light' | 'dark' | 'contrast'

// Settings Context object - stores initial values for authentication context
const SettingsContext = createContext({
  getStylePrefix: () => {},
  updateDarkMode: (value: boolean) => {},
  updateHighContrastMode: (value: boolean) => {},
  subscribe: (callback: any) => {},
  unsubscribe: (callback: any) => {}
})

// Settings object - contains methods to authenticate the user
const Settings = (props: any) => {
  const [darkMode, setDarkMode] = useState(false)
  const [highContrastMode, setHighContrastMode] = useState(false)

  // List of functions to call when a change is made
  const subscribers = new Set();

  const subscribe = (callback: any) => {
    subscribers.add(callback)
  }

  const unsubscribe = (callback: any) => {
    subscribers.delete(callback)
  }

  const updateValue = () => {
    subscribers.forEach((callback: any) => {
      callback()
    })
  }

  const updateDarkMode = (value: boolean) => {
    if (value === true) {
      setHighContrastMode(false)
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
    updateValue()
  }

  const updateHighContrastMode = (value: boolean) => {
    if (value === true) {
      setHighContrastMode(true)
      setDarkMode(false)
    } else {
      setHighContrastMode(false)
    }
    updateValue()
  }

  const getStylePrefix = () => {
    if (darkMode) {
      return 'dark'
    }
    if (highContrastMode) {
      return 'contrast'
    }
    if (!darkMode && !highContrastMode) {
      return 'light'
    }

    return 'light'
  }

  // Create the Settings context and create all children with the context
  return (
    <SettingsContext.Provider
      value={{ updateDarkMode, updateHighContrastMode, getStylePrefix, subscribe, unsubscribe }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}

export { Settings, SettingsContext }
