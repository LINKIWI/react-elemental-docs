import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import Sidebar from 'app/react/components/sidebar';
import { SIDEBAR_WIDTH } from 'app/styles/sidebar';

/**
 * Container enforcing consistent layout of a sidebar to the left of the main page content.
 */
const LayoutContainer = ({ selectedSidebarItem, children }) => (
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
      <Sidebar selected={selectedSidebarItem} />
    </div>

    <div style={{ marginLeft: SIDEBAR_WIDTH }}>
      <Spacing size="huge" left right padding>
        <Spacing top bottom padding>
          {children}
        </Spacing>
      </Spacing>
    </div>
  </div>
);

LayoutContainer.propTypes = {
  // The value of the currently selected sidebar item
  selectedSidebarItem: PropTypes.string,
  // Arbitrary children for the core page contents
  children: PropTypes.node.isRequired,
};

LayoutContainer.defaultProps = {
  selectedSidebarItem: null,
};

export default LayoutContainer;
