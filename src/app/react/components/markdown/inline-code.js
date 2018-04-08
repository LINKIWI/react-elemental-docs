import React from 'react';
import PropTypes from 'prop-types';
import { colors, Spacing, Text } from 'react-elemental';

/**
 * Rendering component for an inline code snippet (enclosed by a single backtick).
 */
const InlineCode = ({ value }) => (
  <Spacing size="2px" left right inline>
    <Text style={{ backgroundColor: colors.gray5, fontSize: '95%' }} secondary inline>
      <Spacing size="8px" left right inline>
        {value}
      </Spacing>
    </Text>
  </Spacing>
);

InlineCode.propTypes = {
  value: PropTypes.string.isRequired,
};

export default InlineCode;
