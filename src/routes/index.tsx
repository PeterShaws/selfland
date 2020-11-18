import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route name="Landing" component={Landing} />
  </Switch>
);

export default Routes;
