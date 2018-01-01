import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import DocBody from 'app/react/components/doc-body';
import Header from 'app/react/components/header';
import COMPONENT_DETAILS from 'resources/data/components';

/**
 * Abstraction over selecting the correct Elemental UI component for which to render documentation.
 */
const DocBodyContainer = ({ selected }) => {
  const {
    meta: { name, description, props },
    source,
    example,
    content,
  } = COMPONENT_DETAILS[selected];

  // TODO || with default component if component doesn't exist

  return (
    <div>
      <Spacing size="large" bottom>
        <Header />
      </Spacing>

      <DocBody
        name={name}
        description={description}
        props={props}
        content={content}
        source={source}
        example={example}
      />
    </div>
  );
};

DocBodyContainer.propTypes = {
  selected: PropTypes.string,
};

DocBodyContainer.defaultProps = {
  selected: null,
};

export default DocBodyContainer;
