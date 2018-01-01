import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text } from 'react-elemental';
import CodeBlock from 'app/react/components/markdown/code-block';

/**
 * Code usage example component displaying source and rendered results side-by-side.
 */
const CodeExample = ({ source, example: Example }) => (
  <div>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <Spacing size="small" bottom>
          <Text color="gray70" uppercase bold>
            Example usage
          </Text>
        </Spacing>

        <Spacing style={{ boxSizing: 'border-box' }} right padding>
          <CodeBlock language="jsx" value={source} />
        </Spacing>
      </div>

      <div style={{ width: '50%' }}>
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
};

export default CodeExample;
