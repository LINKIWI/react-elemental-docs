import React from 'react';
import PropTypes from 'prop-types';
import { Link as ElementalLink, Text } from 'react-elemental';

/**
 * Rendering component for a link.
 */
const Link = ({ href, children }) => (
  <Text color="primary" inline>
    <ElementalLink activeColor="black" href={href}>
      {children}
    </ElementalLink>
  </Text>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
