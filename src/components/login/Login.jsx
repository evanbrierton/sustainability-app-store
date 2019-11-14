import React from 'react';
import { func, shape } from 'prop-types';
import { Button } from '@material-ui/core';
import { Eco } from '@material-ui/icons/';

import './Login.css';

const Login = ({ signInWithGoogle, history, user }) => (
  <div className="Login">
    {user && history.push('/')}
    <Eco color="primary" fontSize="large" />
    <p>Welcome to the Sustainability App Store</p>
    <p>Please sign in</p>
    <Button variant="outlined" color="primary" onClick={signInWithGoogle}>
      Sign in With Google
    </Button>
  </div>
);

Login.propTypes = {
  signInWithGoogle: func.isRequired, history: shape({ push: func }).isRequired, user: shape({}),
};

Login.defaultProps = { user: null };

export default Login;
