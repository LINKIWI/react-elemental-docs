import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';
import Heading from 'app/react/components/doc-body/heading';
import CodeBlock from 'app/react/components/markdown/code-block';

/**
 * Code usage example component displaying source and rendered results side-by-side.
 */
const CodeExample = ({ source, example: Example, isCompact }) => (
  <div>
    <div style={{ display: 'flex', flexDirection: isCompact ? 'column' : 'row' }}>
      <div style={{ width: isCompact ? '100%' : '50%' }}>
        <Spacing size="small" bottom>
          <Heading text="Example usage" hash="example" />
        </Spacing>

        <Spacing style={{ boxSizing: 'border-box' }} right={!isCompact} padding>
          <CodeBlock language="jsx" value={source} />
        </Spacing>
      </div>

      <div style={{ width: isCompact ? '100%' : '50%' }}>
        <Spacing size="small" bottom>
          <Text color="gray70" uppercase bold>
            Rendered output
          </Text>
        </Spacing>

        <Example />
      </div>
    </div>
  </div>
);

CodeExample.propTypes = {
  // Source code for the example
  source: PropTypes.string.isRequired,
  // React component corresponding to the source to instantiate/render
  example: PropTypes.func.isRequired,
  // True to render a horizontally compact version of the component; false otherwise
  isCompact: PropTypes.bool.isRequired,
};

export default CodeExample;
