import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-elemental';

/**
 * Documentation body heading component, automatically wrapping anchor hash logic.
 */
export default class Heading extends Component {
  static propTypes = {
    // Heading text to display
    text: PropTypes.string.isRequired,
    // Unique name for the anchor hash of this heading
    hash: PropTypes.string.isRequired,
  };

  state = { isHover: false };

  handleHoverChange = (isHover) => () => this.setState({ isHover });

  handleClick = () => {
    const { hash } = this.props;

    window.location.hash = hash;
  };

  render() {
    const { text, hash } = this.props;
    const { isHover } = this.state;

    return (
      <div
        onMouseEnter={this.handleHoverChange(true)}
        onMouseLeave={this.handleHoverChange(false)}
        style={{ display: 'inline-block' }}
      >
        <Text
          size="epsilon"
          color="gray15"
          style={{
            float: 'left',
            marginLeft: '-30px',
            marginTop: '-5px',
            opacity: isHover ? 1 : 0,
            transition: 'opacity 0.15s ease',
          }}
        >
          #
        </Text>

        <a name={hash} />
        <Text
          color="gray70"
          style={{ cursor: 'pointer' }}
          onClick={this.handleClick}
          uppercase
          inline
          bold
        >
          {text}
        </Text>
      </div>
    );
  }
}
