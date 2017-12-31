import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, sizes, Link, Spacing, Text } from 'react-elemental';
import KeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import { withRouter } from 'react-router-dom';

/**
 * Horizontal list of links to denote the current navigation hierarchy.
 */
class Breadcrumbs extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })).isRequired,
    history: PropTypes.object.isRequired,
  };

  onBreadcrumbClick = (href) => (evt) => {
    evt.preventDefault();
    this.props.history.push(href);
  };

  render() {
    const { links } = this.props;

    return (
      <div>
        {links.map(({ text, href }, idx) => (
          <span key={text}>
            <Spacing size="tiny" right inline>
              <Text size="lambda" color="primary" uppercase bold inline>
                <Link
                  href={href}
                  type="plain"
                  activeColor="black"
                  onClick={this.onBreadcrumbClick(href)}
                >
                  {text}
                </Link>
              </Text>
            </Spacing>

            {idx < links.length - 1 && (
              <Spacing size="tiny" right inline>
                <KeyboardArrowRight
                  style={{ color: colors.primary, fontSize: sizes.kilo }}
                />
              </Spacing>
            )}
          </span>
        ))}
      </div>
    );
  }
}

export default withRouter(Breadcrumbs);
