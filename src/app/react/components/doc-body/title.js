import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-elemental';

/**
 * Generic page title component.
 */
const Title = ({ name, description }) => (
  <div>
    <Text size="beta" bold>
      {name}
    </Text>
    <Text style={{ fontSize: '18px' }} color="gray60">
      {description}
    </Text>
  </div>
);

Title.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Title;
