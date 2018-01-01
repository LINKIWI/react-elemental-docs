import React, { Component } from 'react';
import { Spacing, Alert } from 'react-elemental';

export default class AlertExample extends Component {
  state = { isVisible: true };

  handleDismiss = () => this.setState({ isVisible: false });

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        {isVisible && (
          <Spacing bottom>
            <Alert
              type="info"
              size="alpha"
              title="Informational alert"
              message="This is a dismissible alert; try clicking the X on the right."
              onDismiss={this.handleDismiss}
              dismissible
            />
          </Spacing>
        )}

        <Spacing bottom>
          <Alert
            type="success"
            title="Success!"
            message="Inform the user that an action has been completed successfully."
          />
        </Spacing>

        <Spacing bottom>
          <Alert
            type="warn"
            title="Be careful!"
            message="Warn the user about something."
          />
        </Spacing>

        <Spacing bottom>
          <Alert
            type="error"
            title="There was an error."
            message={
              'Inform the user that his or her action resulted in an error, and convey appropriate ' +
              'action items that can be taken to resolve the situation.'
            }
          />
        </Spacing>
      </div>
    );
  }
}
