import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { handExitComplete } from '../utils/handleTransition';

const StyledHeader = styled('header')(() => ({
  display: 'flex',
  position: 'absolute',
  right: 20,
  top: 0,
  zIndex: 10,
}));

const StyledMenu = styled(List)(() => ({
  display: 'flex',
  width: 600,
  justifyContent: 'space-evenly',
  marginLeft: 'auto',
}));

export const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledHeader>
      {matches ? (
        <StyledMenu>
          <MenuItem onClick={() => handExitComplete('#home')}>
            <ListItemText>Domů</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handExitComplete('#about')}>
            <ListItemText>O mě</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handExitComplete('#services')}>
            <ListItemText>Služby</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handExitComplete('#contact')}>
            <ListItemText>Kontakt</ListItemText>
          </MenuItem>
        </StyledMenu>
      ) : (
        <>
          <IconButton
            id='basic-button'
            aria-controls='basic-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'right'} open={open} onClose={handleClose}>
            <>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </>
          </Drawer>
        </>
      )}
    </StyledHeader>
  );
};
