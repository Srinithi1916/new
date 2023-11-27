import React, { useContext, useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { userContext } from './Context';


const ProfileMenu = ({ onLogout }) => {
  const [user, setuser] = useContext(userContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setuser("");
    handleCloseMenu();
  };

  return (
    <div style={{display:'flex'}}>
      <p style = {{color :'black', fontFamily: "Poppins", fontSize: '20px'}}>{user}</p>
      <IconButton color="inherit" onClick={handleOpenMenu}>
        <AccountCircleIcon fontSize =  {"large"} style={{color: 'grey'}} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout
          <ExitToAppIcon style={{ marginLeft: 8 }} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
