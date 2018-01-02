import React, { Component } from 'react';
import { Spacing, Tabs, Text } from 'react-elemental';

export default class TabsExample extends Component {
  state = { value: null };

  handleChange = (value) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div>
        <Spacing size="small" bottom>
          <Text>
            {`The currently selected tab is: ${value || '(none yet)'}`}
          </Text>
        </Spacing>

        <Tabs
          options={[
            { value: 'one', label: 'one' },
            { value: 'two', label: 'two' },
            { value: 'three', label: 'three' },
          ]}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
