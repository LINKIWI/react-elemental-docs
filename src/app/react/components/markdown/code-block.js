import React from 'react';
import PropTypes from 'prop-types';
import { colors, Spacing, Text } from 'react-elemental';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

/**
 * Rendering component for a block of code (enclosed by three backticks).
 */
const CodeBlock = ({ language, value }) => (
  <Spacing bottom>
    <Text
      style={{
        backgroundColor: colors.gray5,
        display: 'block',
      }}
      secondary
      inline
    >
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          fontFamily: 'inherit',
          padding: '24px 32px',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'inherit',
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </Text>
  </Spacing>
);

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string.isRequired,
};

CodeBlock.defaultProps = {
  language: undefined,
};

export default CodeBlock;
