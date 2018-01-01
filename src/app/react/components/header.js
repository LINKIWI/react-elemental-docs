import React, { Component } from 'react';
import { connect } from 'react-redux';
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
class Header extends Component {
  static propTypes = {
    // Additional breadcrumb elements to append to the end of the calculated crumbs
    additionalBreadcrumbs: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    // Array of external links to display on the right
    externalLinks: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    })),
    isCompact: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    additionalBreadcrumbs: [],
    externalLinks: DEFAULT_EXTERNAL_LINKS,
  };

  componentWillMount() {
    // "Calculate" the navigation breadcrumbs by slicing the current URL path
    const pathComponents = window.location.pathname.split('/').filter(Boolean);
    this.links = pathComponents.map((component, idx) => ({
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
    const { additionalBreadcrumbs, externalLinks, isCompact } = this.props;

    return (
      <div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <Breadcrumbs
            links={[
              ...this.links,
              ...additionalBreadcrumbs,
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

const mapStateToProps = ({ context }) => ({
  isCompact: context.isCompact,
});

export default connect(mapStateToProps)(Header);
