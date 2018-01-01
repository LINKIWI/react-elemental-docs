import React from 'react';
import { Spacing } from 'react-elemental';
import { Helmet } from 'react-helmet';
import Sidebar from 'app/react/components/sidebar';
import About from 'app/react/components/docs/about';
import { SIDEBAR_WIDTH } from 'app/styles/sidebar';

// TODO do something about this horrible code duplication

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

    <div>
      <div
        style={{
          backgroundColor: '#1F2629',
          height: '100vh',
          left: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          position: 'fixed',
        }}
      >
        <Sidebar selected="about" />
      </div>

      <div style={{ marginLeft: SIDEBAR_WIDTH }}>
        <Spacing size="huge" left right padding>
          <Spacing top padding>
            <About />
          </Spacing>
        </Spacing>
      </div>
    </div>
  </div>
);

export default AboutContainer;
