import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';
import { SIDEBAR_BACKGROUND_COLOR } from 'app/styles/sidebar';

/**
 * Text heading for a list in the sidebar.
 */
const SidebarHeading = ({ text }) => (
  <Spacing style={{ backgroundColor: SIDEBAR_BACKGROUND_COLOR }} left padding>
    <Spacing size="small" top bottom padding>
      <Text style={{ letterSpacing: '1px' }} color="gray35" size="kilo" uppercase bold>
        {text}
      </Text>
    </Spacing>
  </Spacing>
);

SidebarHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarHeading;
