import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';

/**
 * Rendering component for an image.
 */
const Image = ({ src, title, alt }) => (
  <Spacing size="small" bottom>
    <img
      src={src}
      title={title}
      alt={alt}
      style={{
        width: '100%',
      }}
    />
  </Spacing>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  title: undefined,
  alt: undefined,
};

export default Image;
