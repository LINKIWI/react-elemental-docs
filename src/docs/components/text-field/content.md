#### State management

The responsibility of `TextField` is nearly exclusively presentational (styling only). The component wraps a standard `<input>` element and its state can be managed in any way; `TextField` may be controlled or uncontrolled. (Note that all additional props are proxied directly to the `<input>` element.)

For simple use cases where the parent component does not need the value of the `TextField`'s underlying `<input>` element, or chooses to retrieve its value imperatively with `ref`s:

```jsx
import React from 'react';
import { TextField } from 'react-elemental';

const UncontrolledTextField = () => (
  <TextField type="text" />
);

export default UncontrolledTextField;
```

Alternatively, to use `TextField` as a controlled component by storing its value in local component state:

```jsx
import React, { Component } from 'react';
import { TextField } from 'react-elemental';

export default class ControlledTextField extends Component {
  state = { value: '' };

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <TextField
        type="text"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
```
