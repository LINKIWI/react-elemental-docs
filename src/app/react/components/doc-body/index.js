import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import CodeExample from 'app/react/components/doc-body/code-example';
import Notes from 'app/react/components/doc-body/notes';
import Title from 'app/react/components/doc-body/title';
import PropsTable from 'app/react/components/doc-body/props-table';

/**
 * Component wrapping all pieces of available documentation elements for a single Elemental UI
 * component.
 */
const DocBody = ({
  name,
  description,
  props: componentProps,
  content,
  source,
  example,
  isCompact,
}) => (
  <div>
    <Spacing size="large" bottom>
      <Title
        name={name}
        description={description}
      />
    </Spacing>

    {componentProps.length > 0 && (
      <Spacing size="large" bottom>
        <PropsTable props={componentProps} />
      </Spacing>
    )}

    {content && (
      <Spacing size="large" bottom>
        <Notes content={content} />
      </Spacing>
    )}

    <Spacing size="large" bottom>
      <CodeExample source={source} example={example} isCompact={isCompact} />
    </Spacing>
  </div>
);

DocBody.propTypes = {
  // Name of the component
  name: PropTypes.string.isRequired,
  // One-line description of the component
  description: PropTypes.string.isRequired,
  // Array of props: see PropsTable for detailed shape
  props: PropTypes.array,
  // Optional additional notes as Markdown
  content: PropTypes.string,
  // Code example source
  source: PropTypes.string.isRequired,
  // React component corresponding to the source to instantiate/render
  example: PropTypes.func.isRequired,
  // True to render a horizontally compact version of the component; false otherwise
  isCompact: PropTypes.bool.isRequired,
};

DocBody.defaultProps = {
  props: [],
  content: null,
};

export default DocBody;
