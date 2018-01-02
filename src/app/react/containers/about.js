import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LayoutContainer from 'app/react/containers/layout';
import About from 'app/react/components/docs/about';

/**
 * About/home page.
 */
const AboutContainer = ({ location: { pathname } }) => (
  <div>
    <Helmet>
      <title>
        About - react-elemental
      </title>
    </Helmet>

    <LayoutContainer selectedSidebarItem="home--about" pathname={pathname}>
      <About />
    </LayoutContainer>
  </div>
);

AboutContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutContainer;
