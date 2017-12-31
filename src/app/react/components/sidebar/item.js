import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, Spacing, Text } from 'react-elemental';
import { SIDEBAR_BACKGROUND_COLOR, SIDEBAR_HOVER_COLOR } from 'app/styles/sidebar';

/**
 * Describes a single item in a sidebar list.
 */
export default class SidebarItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = { isHover: false };

  handleHoverChange = (isHover) => () => this.setState({ isHover });

  render() {
    const { label, isSelected, onClick } = this.props;
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
        onClick={onClick}
        top
        bottom
        padding
      >
        <Spacing left right padding>
          <Text
            color={isSelected ? colors.gray70 : colors.gray15}
            bold={isSelected}
          >
            {label}
          </Text>
        </Spacing>
      </Spacing>
    );
  }
}
