import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import { Helmet } from 'react-helmet';
import DocBodyContainer from 'app/react/containers/doc-body';
import Sidebar from 'app/react/components/sidebar';
import { SIDEBAR_WIDTH } from 'app/styles/sidebar';

/**
 * Container for rendering documentation for a specific component.
 */
const ComponentDocContainer = ({ match: { params: { component } } }) => (
  <div>
    <Helmet>
      <title>
        {`${component} - react-elemental`}
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
        <Sidebar selected={component} />
      </div>

      <div style={{ marginLeft: SIDEBAR_WIDTH }}>
        <Spacing size="huge" left right padding>
          <Spacing top padding>
            <DocBodyContainer selected={component} />
          </Spacing>
        </Spacing>
      </div>
    </div>
  </div>
);

ComponentDocContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      component: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComponentDocContainer;
