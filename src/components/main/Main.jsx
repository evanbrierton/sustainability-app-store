import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Login, Featured, AppList } from '../../routes';

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

  updateRating = (rating, id) => {
    const { db } = this.props;
    db.collection('apps').doc(id).set({ rating }, { merge: true });
    // this.setState({ userRating: rating });
  }

  render = () => {
    const {
      state: { apps }, props: {
        user, signInWithGoogle, history, db,
      },
    } = this;
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => <Featured apps={apps.slice(0, 4)} />} />
          <Route
            exact
            path="/login"
            render={
              () => <Login user={user} history={history} signInWithGoogle={signInWithGoogle} />
            }
          />
          <Route exact path="/apps" render={() => <AppList apps={apps} db={db} updateRating={this.updateRating} />} />
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
