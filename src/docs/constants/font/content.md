`react-elemental` uses a standardized size gradient for font sizes. The gradient is based on the first few entries of the Greek alphabet, where earlier characters correspond to larger sizes. All sizes are measured in `px` units, and are available as constants from the named export `sizes`.

```jsx
import { sizes } from 'react-elemental';

...

console.log(sizes.alpha);  // '60px'
```

You can use these sizes constants in any context that requires a size constant or a CSS expression literal. Most Elemental UI components also permit specifying the size constant by name rather than value.

```jsx
import { sizes, Spacing } from 'react-elemental';

...

<Text size="alpha">
  You can specify the size by name
</Text>

<Text size={sizes.alpha}>
  You can specify the constant value as well
</Text>
```

#### Sizes

The standard sizes are as follows:

* `alpha` - `60px`
* `beta` - `54px`
* `gamma` - `46px`
* `delta` - `36px`
* `epsilon` - `24px`
* `iota` - `15px` (default `Text` size if not explicitly specified)
* `kilo` - `13px`
* `lambda` - `12px`

See the example in the [Text](!local!/component/text) component for a demonstration of the actual size of each of these constants.
