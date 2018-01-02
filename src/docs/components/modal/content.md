#### State management

`Modal` is a controlled component. The responsibility of maintaining and setting the modal visibility is delegated to the parent component; the `Modal` component itself is purely presentational and does not concern itself with visibility logic. Non-persistent modals expose a prop `onHide` that the parent can use to respond to user requests to close the modal.

A minimal implementation might record modal visibility state in local component state and toggle visibility in respond to `onHide` triggers:

```jsx
import React, { Component } from 'react';
import { Button, Modal } from 'react-elemental';

class ModalController extends Component {
  state = { visible: false };

  setVisibility = (visible) = () => this.setState({ visible });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible && (
          <Modal onHide={this.setVisibility(false)}>
            Modal contents
          </Modal>
        )}
        <Button
          text="Show modal"
          onClick={this.setVisibility(true)}
        />
      </div>
    );
  }
}
```

#### Non-persistent modals and `onHide`

For non-persistent modals (default), the `onHide` callback function prop is invoked when any of the following occurs:

* The user clicks on the provided close UI element (an `X` at the top right corner)
* The user clicks any element outside of the modal
* The user presses the escape key

#### Transitions

The `Modal` component itself is agnostic to how it is displayed by the parent. Since `Modal` exposes a `style` prop that allows the parent to specify arbitrary style overrides, the parent component can create a fade-in/fade-out modal transition by animating the `opacity` style property using a library like [react-motion](https://github.com/chenglou/react-motion).
