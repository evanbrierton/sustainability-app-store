import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { string, func, shape } from 'prop-types';
import {
  AppBar, Toolbar, Button, Typography, Avatar, Menu, MenuItem, makeStyles,
} from '@material-ui/core';

import './Navbar.css';

const Navbar = ({ user, signOut, history }) => {
  const { toolbar } = makeStyles(
    () => ({
      toolbar: {
        justifyContent: 'space-between',
        padding: '0.5em 24px',
      },
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
          <NavLink to="/" className="NavLink">
            <Typography variant="h6" color="textSecondary">
              Sustainability App Store
            </Typography>
          </NavLink>
          {user ? (
            <Toolbar>
              <Typography variant="subtitle1" color="textSecondary">{user.displayName}</Typography>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Avatar src={user ? user.photoURL : ''} />
              </Button>
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
          )
            : (
              <NavLink to="/login" className="NavLink">Sign In</NavLink>
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
