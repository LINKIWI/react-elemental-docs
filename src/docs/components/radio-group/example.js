import React, { Component } from 'react';
import { Label, RadioGroup, Spacing, Text } from 'react-elemental';

export default class RadioGroupExample extends Component {
  state = { value: null };

  handleChange = (value) => this.setState({ value });

  render() {
    const { value } = this.state;

    const purpleLabel = (
      <Spacing size="small" style={{ alignItems: 'center', display: 'flex' }} left>
        <Text color="gray60">
          Purple
        </Text>

        <Spacing size="small" left>
          <Text color="gray20" bold size="kilo">
            Not available
          </Text>
        </Spacing>
      </Spacing>
    );

    return (
      <div>
        <Label
          label="Color"
          sublabel="Choose your favorite color"
        />

        <RadioGroup
          options={[
            { value: 'red', label: 'Red' },
            { value: 'green', label: 'Green' },
            { value: 'blue', label: 'Blue' },
            { value: 'purple', label: purpleLabel, disabled: true },
            { value: 'orange', label: 'Orange' },
          ]}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
