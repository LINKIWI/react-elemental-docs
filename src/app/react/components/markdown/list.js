import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';

/**
 * Rendering component for a list of elements.
 */
const List = ({ ordered, children }) => (
  <Spacing size="small" bottom>
    <Text inline>
      {ordered ? (
        <ol style={{ padding: '0px 40px' }}>
          {children}
        </ol>
      ) : (
        <ul style={{ padding: '0px 40px' }}>
          {children}
        </ul>
      )}
    </Text>
  </Spacing>
);

List.propTypes = {
  // True for <ol> lists; false for <ul> lists
  ordered: PropTypes.bool.isRequired,
  // Array of <li> elements that are descendants of the list tag
  children: PropTypes.node.isRequired,
};

export default List;
