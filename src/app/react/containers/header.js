import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spacing, Tag } from 'react-elemental';
import Breadcrumbs from 'app/react/components/ui/breadcrumbs';

const DEFAULT_EXTERNAL_LINKS = [
  { text: `v${process.env.REACT_ELEMENTAL_VERSION || '?.?.?'}` },
  { text: 'Github', href: 'https://github.com/LINKIWI/react-elemental' },
  { text: 'npm', href: 'https://www.npmjs.com/package/react-elemental' },
];

/**
 * Universal header with navigation breadcrumbs and external links.
 */
export default class Header extends Component {
  static propTypes = {
    // Array of external links to display on the right
    externalLinks: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    })),
    pathname: PropTypes.string.isRequired,
    isCompact: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    externalLinks: DEFAULT_EXTERNAL_LINKS,
  };

  parseBreadcrumbLinks() {
    const { pathname } = this.props;

    // "Calculate" the navigation breadcrumbs by slicing the current URL path
    const pathComponents = pathname.split('/').filter(Boolean);
    return pathComponents.map((component, idx) => ({
      text: component.replace(/-/g, ' '),
      href: `/${pathComponents.slice(0, idx + 1).join('/')}`,
    }));
  }

  renderExternalLink = ({ text, href }, idx) => {
    const { externalLinks } = this.props;

    const link = href ? (
      <a href={href} style={{ textDecoration: 'none' }}>
        <Tag text={text} />
      </a>
    ) : (
      <Tag text={text} />
    );

    return (idx < externalLinks.length - 1) ? (
      <Spacing key={text} size="tiny" right inline>
        {link}
      </Spacing>
    ) : (
      <span key={text}>
        {link}
      </span>
    );
  };

  render() {
    const { externalLinks, isCompact } = this.props;

    return (
      <div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <Breadcrumbs
            links={[
              { text: 'react-elemental docs', href: '/' },
              ...this.parseBreadcrumbLinks(),
            ]}
          />

          {!isCompact && (
            <div>
              {externalLinks.map(this.renderExternalLink)}
            </div>
          )}
        </div>
      </div>
    );
  }
}
