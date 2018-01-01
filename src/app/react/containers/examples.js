import React from 'react';
import { Spacing } from 'react-elemental';
import { Helmet } from 'react-helmet';
import Examples from 'app/react/components/docs/examples';
import Sidebar from 'app/react/components/sidebar';
import { SIDEBAR_WIDTH } from 'app/styles/sidebar';

// TODO do something about this horrible code duplication

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
        <Sidebar selected="examples" />
      </div>

      <div style={{ marginLeft: SIDEBAR_WIDTH }}>
        <Spacing size="huge" left right padding>
          <Spacing top padding>
            <Examples />
          </Spacing>
        </Spacing>
      </div>
    </div>
  </div>
);

export default ExamplesContainer;
