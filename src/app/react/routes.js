import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ComponentDocContainer from 'app/react/containers/component-doc';
import AboutContainer from 'app/react/containers/about';
import ExamplesContainer from 'app/react/containers/examples';

const routes = (
  <Switch>
    <Route path="/" component={AboutContainer} exact />
    <Route path="/examples" component={ExamplesContainer} />
    <Route path="/component/:component" component={ComponentDocContainer} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
