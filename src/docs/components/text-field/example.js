import React, { Component } from 'react';
import { Label, Spacing, TextField } from 'react-elemental';

export default class TextFieldExample extends Component {
  state = { numberVal: '', exactVal: '' };

  handleChange = (key) => ({ target: { value } }) => this.setState({ [key]: value });

  render() {
    const { numberVal, exactVal } = this.state;

    const numberErr = numberVal.length > 0 && Number.isNaN(parseInt(numberVal, 10)) ?
      'That\'s not an integer.' : null;

    const exactErr = exactVal.length !== 4 ? 'That\'s not four characters.' : null;

    return (
      <div>
        <Spacing bottom>
          <Label
            label="Primary TextField"
            sublabel="This is the primary style"
          />
          <TextField />
        </Spacing>

        <Spacing bottom>
          <Label
            label="Number"
            sublabel="Enter any integer"
          />
          <TextField
            value={numberVal}
            error={numberErr}
            onChange={this.handleChange('numberVal')}
          />
        </Spacing>

        <Spacing bottom>
          <Label
            label="Secondary TextField"
            sublabel="This is the secondary style"
          />
          <TextField
            secondary
          />
        </Spacing>

        <Spacing bottom>
          <Label
            label="Exact length string"
            sublabel="Enter a string exactly four characters in length"
          />
          <TextField
            value={exactVal}
            error={exactErr}
            onChange={this.handleChange('exactVal')}
            secondary
          />
        </Spacing>
      </div>
    );
  }
}
