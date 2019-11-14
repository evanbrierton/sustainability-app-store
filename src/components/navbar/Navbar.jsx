import React from 'react';
import { withRouter } from 'react-router-dom';
import { string, func, shape } from 'prop-types';
import {
  AppBar, Toolbar, Button, Typography, Avatar, Menu, MenuItem, makeStyles,
} from '@material-ui/core';

import './Navbar.css';

const Navbar = ({ user, signOut, history }) => {
  const { toolbar, margin } = makeStyles(
    () => ({
      toolbar: {
        justifyContent: 'space-between',
        padding: '0.5em 24px',
      },
      margin: { margin: '0 1em' },
    }),
  )();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="Navbar">
      <AppBar position="static">
        <Toolbar className={toolbar}>
          <Typography variant="h6" color="textSecondary">
            Sustainability App Store
          </Typography>
          {user && (
            <Toolbar>
              <Typography variant="caption" color="textSecondary">{user.displayName}</Typography>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Avatar src={user ? user.photoURL : ''} className={margin} />
              </Button>
              {/* <Button onClick={() => {
                signOut();
                setTimeout(() => history.push('/login'), 100);
              }}
              >
                Sign Out
              </Button> */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {
                  signOut();
                  setTimeout(() => history.push('/login'), 100);
                }}
                >
                  Sign Out
                </MenuItem>
              </Menu>
            </Toolbar>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

Navbar.propTypes = {
  user: shape({ displayName: string, photoURL: string }),
  signOut: func.isRequired,
  history: shape({ push: func }).isRequired,
};
Navbar.defaultProps = { user: null };

export default withRouter(Navbar);
