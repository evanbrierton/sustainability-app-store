import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { func, shape, string } from 'prop-types';
import Button from '@material/react-button';

import '../../assets/SASS/index.scss';
import firebaseConfig from '../../firebaseConfig';
import logo from '../../assets/images/logo.svg';
import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

const App = ({ user, signOut, signInWithGoogle }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {user ? (
        <p>
          Hello,
          {' '}
          {user.displayName}
        </p>
      ) : <p>Please sign in.</p>}
      {user ? (
        <Button outlined onClick={signOut} className="button-alternate">
          Sign Out
        </Button>
      ) : (
        <Button outlined onClick={signInWithGoogle} className="button-alternate">
          Sign in With Google
        </Button>
      )}
    </header>
  </div>
);

App.propTypes = {
  user: shape({ displayName: string, email: string }),
  signOut: func.isRequired,
  signInWithGoogle: func.isRequired,
};

App.defaultProps = { user: null };


export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
