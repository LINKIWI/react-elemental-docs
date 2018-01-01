import React from 'react';
import { Helmet } from 'react-helmet';
import LayoutContainer from 'app/react/containers/layout';
import About from 'app/react/components/docs/about';

/**
 * About/home page.
 */
const AboutContainer = () => (
  <div>
    <Helmet>
      <title>
        About - react-elemental
      </title>
    </Helmet>

    <LayoutContainer selectedSidebarItem="about">
      <About />
    </LayoutContainer>
  </div>
);

export default AboutContainer;
