import React from 'react';
import PropTypes from 'prop-types';
import { colors, Spacing, Text } from 'react-elemental';
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light';
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark';

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
        style={atomDark}
        customStyle={{
          borderRadius: 0,
          fontFamily: 'inherit',
          margin: 'inherit',
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
