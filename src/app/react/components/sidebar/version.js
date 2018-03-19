import React from 'react';
import PropTypes from 'prop-types';
import { colors, Link, Spacing, Text } from 'react-elemental';

/**
 * Link to the Github repository with the SHA of the currently deployed documentation site.
 */
const Version = ({ sha }) => (
  <Spacing left>
    <Text size="kilo" color="gray25">
      <Link
        activeColor={colors.gray60}
        href={`https://github.com/LINKIWI/react-elemental-docs/tree/${sha}`}
      >
        {`version ${sha.substr(0, 12)}`}
      </Link>
    </Text>
  </Spacing>
);

Version.propTypes = {
  sha: PropTypes.string.isRequired,
};

export default Version;
