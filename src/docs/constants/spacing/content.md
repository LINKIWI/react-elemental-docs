`react-elemental` uses a standardized size gradient for spacing constants. All sizes are measured in `px` units, and are available as constants from the named export `spacing`.

```jsx
import { spacing } from 'react-elemental';

...

console.log(spacing.small);  // '12px'
```

In general, the spacing constants are intended to be used with the `Spacing` UI component, though you may use the constant in any context that requires a CSS expression literal for a size.

It is recommended to specify spacing constants by name rather than value for purposes of readability, though either is valid.

```jsx
import { spacing, Spacing } from 'react-elemental';

...

<Spacing size="small">
  This is the recommended way of specifying a size constant
</Spacing>

<Spacing size={spacing.small}>
  You can specify the constant value as well, though this requires another import
</Spacing>
```

#### Sizes

The standard sizes are as follows:

* `micro` - `4px`
* `tiny` - `6px`
* `small` - `12px`
* `default` - `24px` (default `Spacing` size if not explicitly specified)
* `large` - `36px`
* `huge` - `50px`
* `enormous` - `100px`

See the example in the [Spacing](!local!/component/spacing) component for a demonstration of the actual size of each of these constants.
