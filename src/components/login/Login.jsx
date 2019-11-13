import React from 'react';
import { func } from 'prop-types';
import { Button } from '@material-ui/core';

const Login = ({ signInWithGoogle }) => (
  <div>
    <p>Please sign in.</p>
    <Button variant="outlined" color="primary" onClick={signInWithGoogle}>
      Sign in With Google
    </Button>
  </div>
);

Login.propTypes = { signInWithGoogle: func.isRequired };

export default Login;
