#### Sizes

`Alert` allows two sizes: `alpha` and `beta`. You should use the `alpha` size when alerts are global in nature; e.g. they both span the entire viewport and are relevant to the content in the entire viewport. Conversely, `beta`-sized alerts should be used when the alert is relevant only to a single component that occupies a portion of the viewport.

#### Dismissible alerts

The `Alert` component is optionally dismissible. However, since `Alert` is a controlled component, the logic for handling visibility state is delegated to the parent component, and `Alert` exposes a prop `onDismiss` to signal to the parent that the alert has been dismissed.

The parent component might, for example, maintain local state to track the visibility of the `Alert` and have a class method to update it:

```jsx
state = { isAlertVisible: true };

...

handleDismiss = () => this.setState({ isAlertVisible: false });
```

`handleDismiss` should be passed to `Alert` as a prop, and its state should control visibility of the component:

```jsx
import { Alert } from 'react-elemental';

...

render() {
  const { isAlertVisible } = this.state;

  return (
    <div>
      {isAlertVisible && (
        <Alert
          ...
          onDismiss={this.handleDismiss}
          dismissible
        >
      )}
    </div>
  );
}
```

#### Message

You can pass a raw string or a React element as the `message` prop. If you pass a raw string, it will be styled as a `Text` element appropriately based on the current `type`.

```jsx
import { Alert } from 'react-elemental';

...

<Alert
  ...
  message="Alert message"
/>
```

```jsx
import { Alert, Link, Text } from 'react-elemental';

..

<Alert
  ...
  message={
    <Text>
      <Link href="/continue">
        Click here to continue
      </Link>
    </Text>
  }
/>
```
