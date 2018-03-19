import React from 'react';
import PropTypes from 'prop-types';
import { Link, Text } from 'react-elemental';

/**
 * Generic page title component.
 */
const Title = ({ name, description, link }) => (
  <div>
    <Text size="beta" bold>
      {link ? (
        <Link type="plain" style={{ opacity: 1 }} href={link}>
          {name}
        </Link>
      ) : name}
    </Text>
    <Text style={{ fontSize: '18px' }} color="gray60" inline>
      {description}
    </Text>
  </div>
);

Title.propTypes = {
  // Primary title
  name: PropTypes.string.isRequired,
  // Single-line subtitle
  description: PropTypes.string.isRequired,
  // Associated link, if available
  link: PropTypes.string,
};

Title.defaultProps = {
  link: null,
};


export default Title;
