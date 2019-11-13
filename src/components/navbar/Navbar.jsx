import React from 'react';
import { string, func, shape } from 'prop-types';
import {
  AppBar, Toolbar, Button, Typography, Avatar, makeStyles,
} from '@material-ui/core';

const Navbar = ({ user, signOut }) => {
  const { toolbar, margin } = makeStyles(
    () => ({ toolbar: { justifyContent: 'space-between' }, margin: { margin: '0 1em' } }),
  )();

  return (
    <AppBar position="absolute">
      <Toolbar className={toolbar}>
        <Typography variant="h6">
          Sustainability App Store
        </Typography>
        {console.log(user)}
        {user && (
          <Toolbar className={toolbar}>
            <Typography variant="caption">{user.displayName}</Typography>
            <Avatar src={user ? user.photoURL : ''} className={margin} />
            <Button onClick={signOut}>Sign Out</Button>
          </Toolbar>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  user: shape({ displayName: string, email: string }), signOut: func.isRequired,
};
Navbar.defaultProps = { user: null };

export default Navbar;
