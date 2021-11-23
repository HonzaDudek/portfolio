import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Drawer,
  IconButton,
  List,
  ListItemText,
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

const StyledDrawer = styled(Drawer)(() => ({
  width: '50vw',

  '& .MuiDrawer-paper': {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 'auto',

    '& li:before': {
      content: '" "',
      width: '15%',
      height: 2,
      backgroundColor: 'grey',
      marginRight: 10,
    },
  },
}));

export const Navigation = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (section: string) => {
    handExitComplete(section);
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
          <StyledDrawer anchor={'right'} open={open} onClose={handleClose}>
            <MenuItem onClick={() => handleClose('#home')}>Domů</MenuItem>
            <MenuItem onClick={() => handleClose('#services')}>Služby</MenuItem>
            <MenuItem onClick={() => handleClose('#contact')}>Kontakt</MenuItem>
          </StyledDrawer>
        </>
      )}
    </StyledHeader>
  );
};
