import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * HOC factory for scrolling the window to the top when the routing pathname changes.
 */
const withScrollReset = (WrappedComponent) =>
  class WithScrollResetHOC extends Component {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }).isRequired,
    };

    componentDidUpdate(prevProps) {
      const { location: { pathname: currentPath } } = this.props;
      const { location: { pathname: prevPath } } = prevProps;

      if (currentPath !== prevPath) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default withScrollReset;
