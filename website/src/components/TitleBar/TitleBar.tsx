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

const TitleBar = () => {
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
              <TitleBarHelpButton />
            </div>
            <TitleBarIcon />
          </Toolbar>
        </AppBar>
      </Box>
      <div className={'AppBackground'}>
        <Outlet />
      </div>
    </>
  )
}

export default TitleBar
