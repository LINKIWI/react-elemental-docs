import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, Spacing, Text } from 'react-elemental';
import { withRouter } from 'react-router-dom';
import { SIDEBAR_BACKGROUND_COLOR, SIDEBAR_HOVER_COLOR } from 'app/styles/sidebar';

/**
 * Describes a single item in a sidebar list.
 */
class SidebarItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = { isHover: false };

  handleHoverChange = (isHover) => () => this.setState({ isHover });

  handleClick = (evt) => {
    const { href, history } = this.props;

    evt.preventDefault();

    history.push(href);
  };

  render() {
    const { label, isSelected, href } = this.props;
    const { isHover } = this.state;

    const backgroundColor = (() => {
      if (isSelected) {
        return colors.gray5;
      }

      if (isHover) {
        return SIDEBAR_HOVER_COLOR;
      }

      return SIDEBAR_BACKGROUND_COLOR;
    })();

    return (
      <Spacing
        size="small"
        style={{
          backgroundColor,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={this.handleHoverChange(true)}
        onMouseLeave={this.handleHoverChange(false)}
        top
        bottom
        padding
      >
        <a href={href} onClick={this.handleClick} style={{ textDecoration: 'none' }}>
          <Spacing left right padding>
            <Text
              color={isSelected ? colors.gray70 : colors.gray15}
              bold={isSelected}
            >
              {label}
            </Text>
          </Spacing>
        </a>
      </Spacing>
    );
  }
}

export default withRouter(SidebarItem);
