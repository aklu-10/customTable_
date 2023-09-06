import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react'


const ActionComponent = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open1 = Boolean(anchorEl);

  const handleClickdrop = (event) =>
  {
    setAnchorEl(event.currentTarget);
  }

  const handleClosedrop = () => {
    setAnchorEl(null);
  };
  

  return (

    <div>
        <IconButton
            onClick={handleClickdrop}
            size="small"
            aria-controls={open1 ? 'action-dropdown' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
        >

            <MoreVertIcon fontSize="small" />

        </IconButton>

        <Menu
        anchorEl={anchorEl}
        className="MuiMenu-list-dropdown2"
        id="action-dropdown"
        open={open1}
        onClose={handleClosedrop}
        onClick={handleClosedrop}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,

            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
          <MenuItem>    
            A
          </MenuItem>

          <MenuItem>
            B
          </MenuItem>

          <MenuItem>
            C
          </MenuItem>

          <MenuItem>
            D
          </MenuItem>

      </Menu>
    </div>
    
  )
}

export default ActionComponent