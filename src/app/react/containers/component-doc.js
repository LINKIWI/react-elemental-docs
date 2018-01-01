import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LayoutContainer from 'app/react/containers/layout';
import DocBodyContainer from 'app/react/containers/doc-body';

/**
 * Container for rendering documentation for a specific component.
 */
const ComponentDocContainer = ({ match: { params: { component } } }) => (
  <div>
    <Helmet>
      <title>
        {`${component} - react-elemental`}
      </title>
    </Helmet>

    <LayoutContainer selectedSidebarItem={component}>
      <DocBodyContainer selected={component} />
    </LayoutContainer>
  </div>
);

ComponentDocContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      component: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComponentDocContainer;
