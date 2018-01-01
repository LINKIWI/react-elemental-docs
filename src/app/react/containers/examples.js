import React from 'react';
import { Helmet } from 'react-helmet';
import LayoutContainer from 'app/react/containers/layout';
import Examples from 'app/react/components/docs/examples';

/**
 * Example projects page.
 */
const ExamplesContainer = () => (
  <div>
    <Helmet>
      <title>
        Examples - react-elemental
      </title>
    </Helmet>

    <LayoutContainer>
      <Examples />
    </LayoutContainer>
  </div>
);

export default ExamplesContainer;
