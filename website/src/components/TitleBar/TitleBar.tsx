import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import './TitleBar.css'
import TitleBarIcon from './TitleBarIcon'
import { Outlet } from 'react-router'
import TitleBarHomeButton from './TitleBarButtons/TitleBarHomeButton'
import TitleBarLeaderboardButton from './TitleBarButtons/TitleBarLeaderboardButton'
import TitleBarHelpButton from './TitleBarButtons/TitleBarHelpButton'
import TitleBarSettingsButton from './TitleBarButtons/TitleBarSettingsButton'
import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../auth/Account'
import TitleBarLogoutButton from './TitleBarButtons/TitleBarLogoutButton'
import TitleBarLoginButton from './TitleBarButtons/TitleBarLoginButton'
import TitleBarScenarioButton from './TitleBarButtons/TitleBarScenarioButton'
import CustomClockLoader from '../LoadingClock/LoadingClock'
import { LoadingContext } from '../LoadingContext/LoadingContext'

const TitleBar = () => {
  const [status, setStatus] = useState(false)

  const { authenticated, logout } = useContext(AccountContext)
  const { loading } = useContext(LoadingContext)

  useEffect(() => {
    if (authenticated) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }, [authenticated])

  return (
    <>
      <Box className={'TitleBarBox'}>
        <AppBar position="fixed">
          <Toolbar className={'TitleBar'}>
            <h1 className={'Title'}>Hack Attack</h1>
            <div className={'TitleBarButtons'}>
              <TitleBarHomeButton />
              <TitleBarLeaderboardButton />
              <TitleBarSettingsButton />
              {status ? <TitleBarScenarioButton /> : <TitleBarHelpButton />}
              {status ? (
                <TitleBarLogoutButton method={logout} />
              ) : (
                <TitleBarLoginButton />
              )}
            </div>
            <TitleBarIcon />
          </Toolbar>
        </AppBar>
      </Box>
      <div className={'AppBackground'}>
        <>
          { loading && <CustomClockLoader />}
        </>
        <Outlet />
      </div>
    </>
  )
}

export default TitleBar
