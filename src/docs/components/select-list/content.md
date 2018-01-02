#### Specifying options

The `options` prop is an array of objects, each of the following shape:

```jsx
{
  value: ...,
  label: ...,
}
```

`value` is a unique identifier for the entry, while `label` is the literal text displayed in the component.

#### State management

Unlike the other React Elemental UI components, `SelectList` is **not** a controlled component. The currently selected value is maintained in internal component state. However, `SelectList` exposes a semi-declarative API by providing a prop `onChange` that acts as a callback that is fired every time the user changes the selected item.

```jsx
import React, { Component } from 'react';
import { SelectList } from 'react-elemental';

export default class SelectListExample extends Component {
  handleChange = (selectedValue) => {
    console.log(selectedValue);
  };

  render() {
    return (
      <SelectList
        options={[
          { value: 'value', label: 'label' },
        ]}
        onChange={this.handleChange}
      />
    );
  }
}
```
