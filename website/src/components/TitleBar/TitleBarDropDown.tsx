import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import { useNavigate } from 'react-router-dom'

const TitleBarDropDown = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const navigate = useNavigate()

  const settings = [
    {
      title: 'Settings',
      settingsMethod: () => {
        navigate('/settings')
      },
    },
    {
      title: 'Help',
      settingsMethod: () => {
        navigate('/help')
      },
    },
    {
      title: 'Home',
      settingsMethod: () => {
        navigate('/')
      },
    },
  ]

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElUser) {
      handleCloseUserMenu()
    } else {
      setAnchorElUser(event.currentTarget)
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      data-testid="titlebar-menu-button"
      onClick={handleOpenUserMenu}
    >
      <MenuIcon />
      <DropDownMenu
        anchorElUser={anchorElUser}
        settings={settings}
        handleCloseUserMenu={handleCloseUserMenu}
      />
    </IconButton>
  )
}

export default TitleBarDropDown
