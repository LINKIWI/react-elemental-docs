import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';

/**
 * Rendering component for a list of elements.
 */
const List = ({ ordered, children }) => {
  const items = Array.isArray(children) ? children.map((li, idx) => (
    <Spacing key={li.key} size="tiny" bottom={idx < children.length - 1}>
      {li}
    </Spacing>
  )) : children;

  return (
    <Spacing size="small" bottom>
      <Text inline>
        {ordered ? (
          <ol style={{ padding: '0px 40px' }}>
            {items}
          </ol>
        ) : (
          <ul style={{ padding: '0px 40px' }}>
            {items}
          </ul>
        )}
      </Text>
    </Spacing>
  );
};

List.propTypes = {
  // True for <ol> lists; false for <ul> lists
  ordered: PropTypes.bool.isRequired,
  // Array of <li> elements that are descendants of the list tag
  children: PropTypes.node.isRequired,
};

export default List;
