#### Colors

The hover and click state colors are calculated at runtime from the `color` prop passed to the `Button` element. By default, the hover state color is a constant percentage lighter than this color, and the click state color is a constant percentage darker than this color.

#### Children

You may choose to specify a `text` prop, pass `children`, or both. Passing a raw string as `text` will insert it into a `Text` element that automatically applies the necessary styling.

```jsx
import { Button } from 'react-elemental';

...

<Button text="some text" />
```

For more precise control over layout and styling, you may opt to pass arbitrary children instead.

```jsx
import { Button, Text } from 'react-elemental';

...

<Button>
  <Text>
    whatever children
  </Text>
</Button>
```
