import React from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from 'app/react/containers/layout';
import DocBodyContainer from 'app/react/containers/doc-body';
import CONSTANT_DETAILS from 'resources/data/constants';

/**
 * Container for rendering documentation for a specific constant.
 */
const ConstantDocContainer = ({ match: { params: { constant } } }) => (
  <LayoutContainer selectedSidebarItem={constant}>
    <DocBodyContainer docItem={CONSTANT_DETAILS[constant]} />
  </LayoutContainer>
);

ConstantDocContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      constant: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ConstantDocContainer;
