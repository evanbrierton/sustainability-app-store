import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { func, shape, string } from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import * as firebase from 'firebase/app';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import 'typeface-roboto';
import './App.css';
import theme from '../../assets/theme';


import Navbar from '../navbar';
import Login from '../login';
import Main from '../main';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

const App = ({ user, signOut, signInWithGoogle }) => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Navbar user={user} signOut={signOut} />
      {
        user
          ? <Router><Main /></Router>
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
