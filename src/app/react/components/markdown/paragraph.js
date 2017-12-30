import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';

/**
 * Rendering component for a paragraph.
 */
const Paragraph = ({ children }) => (
  <Spacing size="small" bottom>
    <Text inline>
      {children}
    </Text>
  </Spacing>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
