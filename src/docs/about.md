`react-elemental` is a modern, flat, UI library built for React. It is built for maximum development velocity: there is no CSS to import and no additional parameters to add to your Webpack configuration. React Elemental has first-class support for ES6/JSX and works effortlessly with SSR.

It is also built with customizability and flexibility in mind. All components provide APIs for style and behavior overrides, and they transparently proxy all non-component props to the underlying container.

For additional documentation, see the [`README.md`](https://github.com/LINKIWI/react-elemental/blob/master/README.md) and [`CHANGELOG.md`](https://github.com/LINKIWI/react-elemental/blob/master/CHANGELOG.md) on [Github](https://github.com/LINKIWI/react-elemental).

### Fonts

React Elemental has standard primary and secondary typefaces available in the [npm module here](https://www.npmjs.com/package/react-elemental-fonts) ([Github](https://github.com/LINKIWI/react-elemental-fonts)), but usage is optional. The below instructions assume you are using these fonts, but you may choose to use any font you like. They are not bundled directly with React Elemental in order to cut down on bundle size, in case you choose to use your own fonts.

### Installation and Usage

First, install the Elemental core package and Elemental fonts package:

```bash
$ npm install --save react-elemental react-elemental-fonts
```

Next, we need to `bootstrap` the UI library. This is necessary because some styling (like `@font-face` declarations) need to be applied globally with injected CSS and cannot be inline styled.

As early as possible in your client-side rendering path, invoke the `bootstrap` function, optionally with override parameters as documented [in the README](https://github.com/LINKIWI/react-elemental/blob/master/README.md).

For example,

```jsx
import React, { Component } from 'react';
import { bootstrap } from 'react-elemental';
import karlaBold from 'react-elemental-fonts/karla-bold';
import karlaRegular from 'react-elemental-fonts/karla-regular';
import sourceCodeProMedium from 'react-elemental-fonts/source-code-pro-medium';
import sourceCodeProRegular from 'react-elemental-fonts/source-code-pro-regular';

export default class App extends Component {
  constructor(props) {
    super(props);

    // You may invoke this function without any parameters if you don't want to use the standard
    // react-elemental fonts.
    bootstrap({
      primary: {
        regular: karlaRegular,
        bold: karlaBold,
      },
      secondary: {
        regular: sourceCodeProRegular,
        bold: sourceCodeProMedium,
      },
    });
  }

  render() {
    return (
      ...
    );
  }
}

```

That's it! No other configuration is necessary. You can now use the Elemental UI components in any of your components. Try, for example:

```jsx
import { Spacing, Tag, Text } from 'react-elemental';

...
<Spacing bottom>
  <Text size="alpha">
    Hello, world!
  </Text>

  <Tag text="tag text" />
</Spacing>
...
```

Use the sidebar on the left to view documentation for a specific component.
