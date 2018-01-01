import React, { Component } from 'react';
import { Checkbox, Spacing, Tag } from 'react-elemental';

export default class CheckboxExample extends Component {
  state = {
    enabled: true,
    disabledChecked: true,
  };

  handleChange = (key) => (isChecked) => this.setState({ [key]: isChecked });

  render() {
    const {
      label,
      active,
      enabled,
      disabled,
      disabledChecked,
      custom,
    } = this.state;

    return (
      <div>
        <Spacing size="small" bottom>
          <Checkbox
            label="Label"
            onChange={this.handleChange('label')}
            checked={label}
          />
        </Spacing>

        <Spacing size="small" bottom>
          <Checkbox
            label="Active"
            onChange={this.handleChange('active')}
            checked={active}
          />
        </Spacing>

        <Spacing size="small" bottom>
          <Checkbox
            label="Enabled"
            onChange={this.handleChange('enabled')}
            checked={enabled}
          />
        </Spacing>

        <Spacing size="small" bottom>
          <Checkbox
            label="Disabled state"
            onChange={this.handleChange('disabled')}
            checked={disabled}
            disabled
          />
        </Spacing>

        <Spacing size="small" bottom>
          <Checkbox
            label="Disabled, defaulted to checked"
            onChange={this.handleChange('disabledChecked')}
            checked={disabledChecked}
            disabled
          />
        </Spacing>

        <Spacing size="small" bottom>
          <Checkbox
            onChange={this.handleChange('custom')}
            checked={custom}
          >
            <Spacing size="small" left>
              <Tag text="You can pass any children as the label" />
            </Spacing>
          </Checkbox>
        </Spacing>
      </div>
    );
  }
}
