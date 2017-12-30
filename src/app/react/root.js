import React from 'react';
import { Helmet } from 'react-helmet';
import routes from 'app/react/routes';

/**
 * Application root, containing some abstractions that would otherwise be hardcoded into HTML.
 */
const Root = () => (
  <div>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Helmet>

    {routes}
  </div>
);

export default Root;
