#### State management

The responsibility of `TextArea` is nearly exclusively presentational (styling only). The component wraps a standard `<textarea>` element and its state can be managed in any way; `TextArea` may be controlled or uncontrolled. (Note that all additional props are proxied directly to the `<textarea>` element.)

For simple use cases where the parent component does not need the value of the `TextArea`'s underlying `<textarea>` element, or chooses to retrieve its value imperatively with `ref`s:

```jsx
import React from 'react';
import { TextArea } from 'react-elemental';

const UncontrolledTextArea = () => (
  <TextArea />
);

export default UncontrolledTextArea;
```

Alternatively, to use `TextArea` as a controlled component by storing its value in local component state:

```jsx
import React, { Component } from 'react';
import { TextArea } from 'react-elemental';

export default class ControlledTextArea extends Component {
  state = { value: '' };

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <TextArea
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
```
