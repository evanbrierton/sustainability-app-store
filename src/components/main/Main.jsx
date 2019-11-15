import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';

import Login from '../login';
import Featured from '../../routes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { apps: [] };
  }

  componentDidMount = () => {
    const { db } = this.props;
    db.collection('apps').get().then((querySnapshot) => {
      querySnapshot.forEach(
        (doc) => this.setState(
          (state) => ({ apps: [...state.apps, { id: doc.id, ...doc.data() }] }),
        ),
      );
    });
  }

  render = () => {
    const { state: { apps }, props: { user, signInWithGoogle, history } } = this;
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => <Featured apps={apps} />} />
          <Route
            exact
            path="/login"
            render={
              () => <Login user={user} history={history} signInWithGoogle={signInWithGoogle} />
            }
          />
        </Switch>
      </main>
    );
  }
}

Main.propTypes = {
  db: shape({ collection: func }).isRequired,
  user: shape({}),
  signInWithGoogle: func.isRequired,
  history: shape({ push: func }).isRequired,
};

Main.defaultProps = { user: null };

export default withRouter(Main);
