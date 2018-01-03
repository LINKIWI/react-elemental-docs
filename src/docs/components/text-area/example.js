import React, { Component } from 'react';
import { Label, Spacing, TextArea } from 'react-elemental';

export default class TextAreaExample extends Component {
  state = { value: '' };

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div>
        <Spacing bottom>
          <Label
            label="Type some free-form text"
            sublabel="Value is controlled and stored in local state"
          />
          <TextArea
            value={value}
            onChange={this.handleChange}
            style={{ height: '150px', width: '100%' }}
          />
        </Spacing>

        <Spacing bottom>
          <Label
            label="Type some more text"
            sublabel="This component is not controlled"
          />
          <TextArea
            style={{ height: '150px', width: '100%' }}
          />
        </Spacing>

        <Spacing bottom>
          <Label
            label="Error state"
            sublabel="Error string below the component"
          />
          <TextArea
            style={{ height: '150px', width: '100%' }}
            error="This is what an error looks like"
          />
        </Spacing>
      </div>
    );
  }
}
