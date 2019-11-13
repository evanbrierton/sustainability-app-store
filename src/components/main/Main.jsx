import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Featured from '../../routes';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" render={Featured} />
    </Switch>
  </main>
);

export default withRouter(Main);
