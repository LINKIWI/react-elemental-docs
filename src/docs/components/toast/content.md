#### Placement in component tree

It is recommended to instantiate any `Toast` components as high up in your component tree as possible. This ensures that toasts are persistent across route transitions or component mounts/unmounts.

#### State management

The `Toast` component is purely presentational. It only wraps styling logic for the toast element itself; in actual usage, it should be wrapped with a manager that controls and mediates toast visibility. The `Toast` component itself is agnostic to how its visibility state is managed.

For simple, single-element toasts, visibility state might be controlled in the parent component using local state as in the example usage below.

However, more complex schemes may require a dedicated toast manager to mediate display of potentially multiple, temporally overlapping toasts.

For a Redux-based state management system, for example, you may choose to define an asynchronous action with [redux-thunk](https://github.com/gaearon/redux-thunk) that dispatches visibility toggle actions with a constant delay in between.

```jsx
const SHOW_TOAST = ...
const HIDE_TOAST = ...

const showToast = (toastID, text) => ({
  type: SHOW_TOAST,
  payload: { toastID, text },
});

const hideToast = (toastID) => ({
  type: HIDE_TOAST,
  payload: { toastID },
});

export const toast = (text) => (dispatch) => {
  const uuid = ...
  dispatch(showToast(uuid, text));
  setTimeout(() => dispatch(hideToast(uuid)), TOAST_DURATION);
};
```

The reducer may choose to update the application store with the action payload contents directly, adding or removing the toast ID and text contents as appropriate.

An application-implemented toast container could then read these toast entries and mediate their presentation accordingly:

```jsx
import React from 'react';
import { connect } from 'react-redux';
import { Toast } from 'react-elemental';

const ToastContainer = ({ toasts }) => (
  // Logic for rendering multiple toasts in a vertical stack
  ...
);

const mapStateToProps = ({ toasts }) => ({
  toasts: toasts.map((toast) => toast.text),
});

export default connect(mapStateToProps)(ToastContainer);
```

The above is merely one example of how toasts can be managed. The component itself does not enforce or make assumptions about any state management application logic.
