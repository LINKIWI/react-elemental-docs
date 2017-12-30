import React from 'react';
import { Route } from 'react-router';
import Container from 'app/react/containers/container';

const routes = (
  <div>
    <Route path="*" component={Container} />
  </div>
);

export default routes;
