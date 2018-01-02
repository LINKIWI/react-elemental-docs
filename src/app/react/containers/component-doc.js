import React from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from 'app/react/containers/layout';
import DocBodyContainer from 'app/react/containers/doc-body';
import COMPONENT_DETAILS from 'resources/data/components';

/**
 * Container for rendering documentation for a specific component.
 */
const ComponentDocContainer = ({ match: { params: { component } } }) => (
  <LayoutContainer selectedSidebarItem={component}>
    <DocBodyContainer docItem={COMPONENT_DETAILS[component]} />
  </LayoutContainer>
);

ComponentDocContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      component: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComponentDocContainer;
