import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import routes from 'app/react/routes';
import { setWindowDimensions } from 'app/redux/actions/context';

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
        {routes}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleWindowDimensionsChange: (width, height) => dispatch(setWindowDimensions(width, height)),
});

export default withRouter(connect(null, mapDispatchToProps)(Root));
