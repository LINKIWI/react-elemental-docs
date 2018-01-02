`react-elemental` has several standard color constants. They are exported with the name `colors` on the root path:

```jsx
import { colors } from 'react-elemental';
```

`colors` is an object mapping names of color constants to a string of their hex values (e.g., `'#FFFFFF'`).

Generally, if an Elemental UI component accepts `color` as a prop, you can specify the color by passing its imported color constant, *or* by passing its name directly.

```jsx
import { colors, Text } from 'react-elemental';

...

<Text color={colors.primary}>
  This is good
</Text>
<Text color="primary">
  This works too!
</Text>
```

`react-elemental` uses three categories of colors, each of which are exposed in the exported `colors` object.

#### Primary colors

React Elemental has the notion of a "primary" color. Think of the primary color as the central visual theme shared across all Elemental UI components. This might, for example, be your brand color.

You can access the primary color and its variants on the `color` object:

```jsx
import { colors } from 'react-elemental';

console.log(colors.primary);
console.log(colors.primaryLight);
console.log(colors.primaryDark);
```

The primary color is used as the default color throughout most Elemental UI components, if it is not overridden. It is, for example, the default stroke color on a `LoadingBar`, the default `Button` background color, the default `Tag` background and outline color, etc.

There are three configurable variants of the primary color:

* `primary` - The regular primary color.
* `primaryLight` - A lighter version of the primary color.
* `primaryDark` - A darker version of the primary color.

You can configure these colors during the `bootstrap` invocation of `react-elemental`:

```jsx
import { bootstrap } from 'react-elemental';

...

bootstrap(fontOpts, {
  primary: ...,
  primaryLight: ...,
  primaryDark: ...,
});
```

All components will respect the overriden primary colors after it is bootstrapped.

#### Grayscale colors

The `colors` object also generates grayscale colors at 5% increments. This creates different levels of gray starting at 5% darkness, increasing at 5% intervals until 95% darkness. They are available via the `grayN` property on `colors`, where `N` is an integer divisible by 5 that is greater than 0 and less than 100.

```jsx
import { colors } from 'react-elemental';

console.log(colors.white);
console.log(colors.gray5);
console.log(colors.gray55);
console.log(colors.gray95);
console.log(colors.white);
```

Note that the grayscale properties are generated at runtime, so your IDE will generally not be able to resolve the property name on the `colors` object.

#### Other colors

React Elemental also ships with several other standard colors, each of which has light and dark variants in the same vein as the primary color (e.g. `red`, `redLight`, and `redDark`). They are:

* `green`
* `red`
* `blue`
* `orange`
* `yellow`
* `purple`
