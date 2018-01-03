import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-elemental';
import UILink from 'app/react/components/ui/link';

/**
 * Rendering component for a link.
 */
const Link = ({ href, children }) => (
  <Text color="primary" inline>
    <UILink activeColor="black" href={href}>
      {children}
    </UILink>
  </Text>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
