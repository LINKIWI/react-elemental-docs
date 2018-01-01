import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import DocBody from 'app/react/components/doc-body';
import Header from 'app/react/components/header';
import Unknown from 'app/react/components/doc-body/unknown';
import COMPONENT_DETAILS from 'resources/data/components';

/**
 * Abstraction over selecting the correct Elemental UI component for which to render documentation.
 */
const DocBodyContainer = ({ selected }) => {
  const { meta, source, example, content } = COMPONENT_DETAILS[selected] || {};

  return (
    <div>
      <Spacing size="large" bottom>
        <Header />
      </Spacing>

      {meta ? (
        <DocBody
          name={meta.name}
          description={meta.description}
          props={meta.props}
          content={content}
          source={source}
          example={example}
        />
      ) : (
        <Unknown />
      )}
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
