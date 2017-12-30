import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Heading from 'app/react/components/markdown/heading';
import Paragraph from 'app/react/components/markdown/paragraph';
import CodeBlock from 'app/react/components/markdown/code-block';
import InlineCode from 'app/react/components/markdown/inline-code';
import Link from 'app/react/components/markdown/link';
import List from 'app/react/components/markdown/list';
import Image from 'app/react/components/markdown/image';

// Map of each markdown AST type to a rendering component/function.
const renderers = {
  heading: Heading,
  paragraph: Paragraph,
  code: CodeBlock,
  inlineCode: InlineCode,
  link: Link,
  list: List,
  image: Image,
};

/**
 * Markdown parser and renderer.
 */
const Markdown = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={renderers}
  />
);

Markdown.propTypes = {
  // Raw markdown input to parse and render
  source: PropTypes.string.isRequired,
};

export default Markdown;
