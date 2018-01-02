import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LayoutContainer from 'app/react/containers/layout';
import Examples from 'app/react/components/docs/examples';

/**
 * Example projects page.
 */
const ExamplesContainer = ({ location: { pathname } }) => (
  <div>
    <Helmet>
      <title>
        Examples - react-elemental
      </title>
    </Helmet>

    <LayoutContainer selectedSidebarItem="home--examples" pathname={pathname}>
      <Examples />
    </LayoutContainer>
  </div>
);

ExamplesContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExamplesContainer;
