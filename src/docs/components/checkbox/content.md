#### State management

`Checkbox` is a controlled component. The responsibility of maintaining and setting the checkbox state is delegated to the parent component; the `Checkbox` component itself only provides APIs to render a checked/unchecked checkbox, and a callback function that is invoked when the checkbox state is changed by the user.

A minimal implementation might just record the checkbox state in local component state:

```jsx
import React, { Component } from 'react';
import { Checkbox } from 'react-elemental';

class CheckboxController extends Component {
  state = { checked: false };

  handleChange = (checked) => this.setState({ checked });

  render() {
    const { checked } = this.state;

    return (
      <Checkbox
        checked={checked}
        onChange={this.handleChange}
      />
    );
  }
}
```
