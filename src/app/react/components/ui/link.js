import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as ElementalLink } from 'react-elemental';
import { withRouter } from 'react-router';

// Link href prefix to denote that the link should be treated as a local, SPA-only link.
export const LOCAL_PREFIX = '!local!';

/**
 * Abstraction over the Elemental Link component and react-router to intelligently intercept SPA
 * links and push them onto the history stack, rather than navigating to a new page. SPA-only links
 * can be denoted in source or in Markdown files as !local!/path/to/resource; they will use
 * react-router navigation.
 */
class Link extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['regular', 'plain', 'underline']),
    href: PropTypes.string,
    activeColor: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    type: 'regular',
    href: '#',
    activeColor: 'currentColor',
    style: {},
    children: null,
  };

  normalizedHref = () => {
    const { href } = this.props;

    return href.startsWith(LOCAL_PREFIX) ? href.substr(LOCAL_PREFIX.length) : href;
  };

  handleClick = (evt) => {
    const { href, history } = this.props;

    if (this.normalizedHref() !== href) {
      evt.preventDefault();
      history.push(this.normalizedHref());
    }
  };

  render() {
    const { type, activeColor, style, children } = this.props;

    return (
      <ElementalLink
        type={type}
        activeColor={activeColor}
        href={this.normalizedHref()}
        style={style}
        onClick={this.handleClick}
      >
        {children}
      </ElementalLink>
    );
  }
}

export default withRouter(Link);
