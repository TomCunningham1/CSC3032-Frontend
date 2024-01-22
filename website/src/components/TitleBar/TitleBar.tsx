import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import './TitleBar.css'
import { Avatar, Tooltip } from '@mui/material'
import TitleBarDropDown from './TitleBarDropDown'

const ButtonAppBar = ({ children, hideOptions }: any) => {
  return (
    <>
      <Box className={'TitleBarBox'}>
        <AppBar position="fixed">
          <Toolbar>
            {
              !hideOptions && <TitleBarDropDown />
            }

            <Typography
              variant="h6"
              component="div"
              className="Typography"
              data-testid="titlebar-title"
            >
              Hack-Attack
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  )
}

export default ButtonAppBar
