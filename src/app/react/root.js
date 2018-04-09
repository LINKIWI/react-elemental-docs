import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Favicon from 'react-favicon';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import routes from 'app/react/routes';
import { setWindowDimensions } from 'app/redux/actions/context';
import favicon from 'resources/img/favicon';

/**
 * Application root.
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
        <Favicon url={favicon} />

        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleWindowDimensionsChange: (width, height) => dispatch(setWindowDimensions(width, height)),
});

export default withRouter(connect(null, mapDispatchToProps)(Root));
