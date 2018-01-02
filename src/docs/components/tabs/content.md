#### State management

`Tabs` is a controlled component. The responsibility of maintaining state related to the currently selected tab entry is delegated to the parent component. The `Tabs` component itself is agnostic to how this state is managed; it only provides APIs for rendering the currently selected `value` and informing the parent when the user requests a change of tab.

A minimal implementation might record the currently selected tab value in local component state; see the example usage below.
