import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import routes from 'app/react/routes';
import { setWindowDimensions } from 'app/redux/actions/context';

/**
 * Application root, containing some abstractions that would otherwise be hardcoded into HTML.
 */
export class Root extends Component {
  static propTypes = {
    handleWindowDimensionsChange: PropTypes.func.isRequired,
  };

  componentWillMount() {
    window.addEventListener('resize', this.onResize);

    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => this.props.handleWindowDimensionsChange(window.innerWidth, window.innerHeight);

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
        </Helmet>

        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleWindowDimensionsChange: (width, height) => dispatch(setWindowDimensions(width, height)),
});

export default withRouter(connect(null, mapDispatchToProps)(Root));
