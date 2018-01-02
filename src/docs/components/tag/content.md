#### State management

`Tag` is a controlled component. The responsibility of maintaining and setting the tag visibility is delegated to the parent component; the `Tag` component itself is purely presentational and does not concern itself with visibility logic. Dismissible tags expose a prop `onDismiss` that the parent can use to respond to user requests to dismiss the tag.

A minimal implementation might record tag visibility in local component state and toggle visibility in response to `onDismiss` triggers:

```jsx
import React, { Component } from 'react';
import { Tag } from 'react-elemental';

export default class TagController extends Component {
  state = { visible: true };

  handleDismiss = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible && (
          <Tag onDismiss={this.setVisibility(false)} text="Tag" />
        )}
      </div>
    );
  }
}
```
