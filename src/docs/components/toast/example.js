import React, { Component } from 'react';
import { Button, Text, Toast } from 'react-elemental';

const TOAST_DURATION = 5000;

export default class ToastExample extends Component {
  state = { isVisible: false };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  showToast = () => {
    // Reset the toast visibility timer if the button is clicked again
    clearTimeout(this.timeout);

    this.setState({ isVisible: true });
    this.timeout = setTimeout(() => this.setState({ isVisible: false }), TOAST_DURATION);
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <Button
          text="Show toast for 5 seconds"
          onClick={this.showToast}
        />

        {isVisible && (
          <Toast>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Toast>
        )}
      </div>
    );
  }
}
