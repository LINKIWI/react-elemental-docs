import React from 'react';
import PropTypes from 'prop-types';
import { sizes, Spacing, Text } from 'react-elemental';

// Map of heading levels to the corresponding font size.
const LEVEL_SIZES = {
  1: sizes.beta,
  2: sizes.gamma,
  3: sizes.delta,
  4: sizes.epsilon,
  5: sizes.iota,
  6: sizes.iota,
};

/**
 * Rendering component for various levels of headings.
 */
const Heading = ({ level, children }) => (
  <Spacing size="small" bottom>
    <Text size={LEVEL_SIZES[level.toString()]}>
      {children}
    </Text>
  </Spacing>
);

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
