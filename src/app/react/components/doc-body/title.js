import React from 'react';
import PropTypes from 'prop-types';
import { Link, Spacing, Text } from 'react-elemental';

/**
 * Generic page title component.
 */
const Title = ({ name, description, link, annotation }) => (
  <div>
    <div style={{ alignItems: 'end', display: 'flex' }}>
      <Text size="beta" bold>
        {link ? (
          <Link type="plain" style={{ opacity: 1 }} href={link}>
            {name}
          </Link>
        ) : name}
      </Text>

      <Spacing size="13px" bottom>
        <Spacing left>
          {annotation}
        </Spacing>
      </Spacing>
    </div>

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
  // Optional annotation to display next to the title
  annotation: PropTypes.node,
};

Title.defaultProps = {
  link: null,
  annotation: null,
};


export default Title;
