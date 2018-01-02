import React from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from 'app/react/containers/layout';
import DocBodyContainer from 'app/react/containers/doc-body';
import CONSTANT_DETAILS from 'resources/data/constants';

/**
 * Container for rendering documentation for a specific constant.
 */
const ConstantDocContainer = ({ match: { params: { constant } }, location: { pathname } }) => (
  <LayoutContainer selectedSidebarItem={`constant--${constant}`} pathname={pathname}>
    <DocBodyContainer docItem={CONSTANT_DETAILS[constant]} />
  </LayoutContainer>
);

ConstantDocContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      constant: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConstantDocContainer;
