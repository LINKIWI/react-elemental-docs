import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';
import Markdown from 'app/react/components/markdown';

/**
 * Optional free-form markdown notes to accompany the generated component documentation.
 */
const Notes = ({ content }) => (
  <div>
    <Spacing size="small" bottom>
      <Text color="gray70" uppercase bold>
        Notes
      </Text>
    </Spacing>
    <Markdown source={content} />
  </div>
);

Notes.propTypes = {
  // Markdown source of the additional component notes
  content: PropTypes.string.isRequired,
};

export default Notes;
