import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, Spacing, Text } from 'react-elemental';
import { withRouter } from 'react-router';
import { SIDEBAR_BACKGROUND_COLOR, SIDEBAR_ACTIVE_COLOR } from 'app/styles/sidebar';

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

    const backgroundColor = (isSelected || isHover) ?
      SIDEBAR_ACTIVE_COLOR : SIDEBAR_BACKGROUND_COLOR;

    return (
      <a href={href} onClick={this.handleClick} style={{ textDecoration: 'none' }}>
        <div
          style={{
            backgroundColor: colors.primary,
            height: '42px',
            position: 'absolute',
            transition: 'all 0.15s ease',
            width: isSelected ? '3px' : 0,
          }}
        />

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
          <Spacing left right padding>
            <Text
              color={isSelected ? colors.gray80 : colors.gray70}
              bold={isSelected}
            >
              {label}
            </Text>
          </Spacing>
        </Spacing>
      </a>
    );
  }
}

export default withRouter(SidebarItem);
