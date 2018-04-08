import React from 'react';
import PropTypes from 'prop-types';
import { Image as ElementalImage, Spacing } from 'react-elemental';

/**
 * Rendering component for an image.
 */
const Image = ({ src, title, alt }) => (
  <Spacing bottom>
    <ElementalImage
      src={src}
      title={title}
      alt={alt}
      width="100%"
      style={{ margin: '0 auto', maxWidth: '1000px' }}
      lazy
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
