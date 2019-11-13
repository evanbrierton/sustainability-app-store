import React from 'react';
import { func } from 'prop-types';
import { Button } from '@material-ui/core';
import { Eco } from '@material-ui/icons/';

import './Login.css';

const Login = ({ signInWithGoogle }) => (
  <div className="Login">
    <Eco color="primary" fontSize="large" />
    <p>Welcome to the Sustainability App Store</p>
    <p>Please sign in</p>
    <Button variant="outlined" color="primary" onClick={signInWithGoogle}>
      Sign in With Google
    </Button>
  </div>
);

Login.propTypes = { signInWithGoogle: func.isRequired };

export default Login;
