import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import Heading from 'app/react/components/doc-body/heading';
import Markdown from 'app/react/components/markdown';

/**
 * Optional free-form markdown notes to accompany the generated component documentation.
 */
const Notes = ({ content }) => (
  <div>
    <Spacing size="small" bottom>
      <Heading text="Notes" hash="notes" />
    </Spacing>

    <Markdown source={content} />
  </div>
);

Notes.propTypes = {
  // Markdown source of the additional component notes
  content: PropTypes.string.isRequired,
};

export default Notes;
