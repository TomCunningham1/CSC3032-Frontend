import { Menu, MenuItem, Typography } from "@mui/material";

interface Settings {
    title: string;
    settingsMethod: () => void;
}

interface DropDownMenuInterface {
    anchorElUser: HTMLElement | null;
    settings: Settings[];
    handleCloseUserMenu: () => void;
}
const DropDownMenu = ({anchorElUser, settings, handleCloseUserMenu}: DropDownMenuInterface) => {

    return (
        <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting:Settings) => (
          <MenuItem 
            data-testid={`titlebar-menu-item-${setting.title}`} 
            key={setting.title} onClick={handleCloseUserMenu}>
            <Typography data-testid={`titlebar-menu-button-${setting.title}`}
            onClick={setting.settingsMethod} textAlign="center">{setting.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    )
}

export default DropDownMenu;
