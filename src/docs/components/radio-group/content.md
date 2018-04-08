#### Specifying options

Radio options are specified with the `options` prop. It should be an array, where each element is an object of the following shape:

* `value`: A unique string identifier for the option.
* `label`: Either a string or a React element describing the label displayed next to the radio selection button.
* `disabled` (optional): Optionally set this to `true` to disable the option. Disabled options are styled differently, do not respond to mouse events, and are skipped when navigating options with the keyboard.

#### State management

`RadioGroup` is a controlled component. The responsibility of maintaining and setting the active selected option is delegated to the parent component; `RadioGroup` only provides APIs to render a list of radio options, optionally with one such option in an active (selected) state. This is similar to the state management required of the [Tabs](!local!/component/tabs) component.

A minimal implementation might record the active option in local component state:

```jsx
import React, { Component } from 'react';
import { RadioGroup } from 'react-elemental';

class RadioGroupController extends Component {
  state = { value: null };

  handleChange = (value) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <RadioGroup
        options={[
          { value: 'one', label: 'one' },
          { value: 'two', label: 'two' },
        ]}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
```

#### Radio renderer

You can optionally specify a renderer function for each radio button in the group. While the `RadioGroup` component handles rendering the contents of the radio button itself, you can control its layout with a custom renderer function. This can be used, for example, to adjust the spacing between radio buttons or to switch to a horizontal layout of options.

The `radioRenderer` prop is a function that should return a React element to be rendered for each radio button. The function is applied to an array containing instances of radio buttons with [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Thus, the function receives as arguments, in order, the rendered radio button element, the index into the array where it exists, and the array of radio button elements.

Each returned React element should have a unique `key`. By convention, each option's `value` should be unique; it is recommended to set `key={option.props.value}`.

A renderer function could create a horizontal layout using flexbox:

```jsx
import React from 'react';
import { RadioGroup, Spacing } from 'react-elemental';

const HorizontalRadioGroup = () => (
  <RadioGroup
    options={[
      { value: 'one', label: 'one' },
      { value: 'two', label: 'two' },
    ]}
    style={{ display: 'flex' }}
    radioRenderer={(option) => (
      <Spacing key={option.props.value} right>
        {option}
      </Spacing>
    )}
  />
);
```

By default, if no `radioRenderer` is specified, each radio button will be wrapped with a `Spacing` element for vertical separation of options.
