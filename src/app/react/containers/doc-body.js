import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Spacing } from 'react-elemental';
import DocBody from 'app/react/components/doc-body';
import Header from 'app/react/components/header';
import Unknown from 'app/react/components/doc-body/unknown';

/**
 * Abstraction over selecting the correct Elemental UI component for which to render documentation.
 */
const DocBodyContainer = ({ docItem: { meta, source, example, content } = {}, isCompact }) => (
  <div>
    <Spacing size="large" bottom>
      <Header />
    </Spacing>

    {meta ? (
      <div>
        <Helmet>
          <title>
            {`${meta.name} - react-elemental`}
          </title>
        </Helmet>

        <DocBody
          name={meta.name}
          description={meta.description}
          props={meta.props}
          content={content}
          source={source}
          example={example}
          isCompact={isCompact}
        />
      </div>
      ) : (
        <div>
          <Helmet>
            <title>
              Component Not Found - react-elemental
            </title>
          </Helmet>

          <Unknown />
        </div>
      )}
  </div>
);

DocBodyContainer.propTypes = {
  docItem: PropTypes.shape({
    meta: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    example: PropTypes.func.isRequired,
    content: PropTypes.string,
  }),
  isCompact: PropTypes.bool.isRequired,
};

DocBodyContainer.defaultProps = {
  docItem: undefined,
};

const mapStateToProps = ({ context }) => ({
  isCompact: context.isCompact,
});

export default connect(mapStateToProps)(DocBodyContainer);
