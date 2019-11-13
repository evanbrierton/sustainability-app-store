import React from 'react';
import { func, shape, string } from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import * as firebase from 'firebase/app';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import 'typeface-roboto';
import logo from '../../assets/images/logo.svg';
import './App.css';

import Navbar from '../navbar';
import Login from '../login';
import Main from '../main';

const theme = responsiveFontSizes(createMuiTheme({ palette: { primary: { main: '#09d3ac' } } }));

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

const App = ({ user, signOut, signInWithGoogle }) => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Navbar user={user} signOut={signOut} />
      <img src={logo} className="App-logo" alt="logo" />
      {
        user
          ? <Main />
          : <Login user={user} signInWithGoogle={signInWithGoogle} />
        }
    </ThemeProvider>
  </div>
);

App.propTypes = {
  user: shape({ displayName: string, email: string }),
  signOut: func.isRequired,
  signInWithGoogle: func.isRequired,
};

App.defaultProps = { user: null };


export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
