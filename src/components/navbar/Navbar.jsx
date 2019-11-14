import React from 'react';
import { withRouter } from 'react-router-dom';
import { string, func, shape } from 'prop-types';
import {
  AppBar, Toolbar, Button, Typography, Avatar, makeStyles,
} from '@material-ui/core';

import './Navbar.css';

const Navbar = ({ user, signOut, history }) => {
  const { toolbar, margin } = makeStyles(
    () => ({
      toolbar: {
        justifyContent: 'space-between',
        padding: '0.5em 24px',
        // minHeight: 64,
        // alignItems: 'flex-start',
        // paddingTop: '0.5em',
        // paddingBottom: '2em',
      },
      margin: { margin: '0 1em' },
    }),
  )();

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
              <Avatar src={user ? user.photoURL : ''} className={margin} />
              <Button onClick={() => {
                signOut();
                setTimeout(() => history.push('/login'), 100);
              }}
              >
                Sign Out
              </Button>
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
