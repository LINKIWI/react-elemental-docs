#### Styling

`Link` components automatically inherit the text styling from the parent element. The recommended way to style a `Link` is to surround it with a `Text` component describing the desired styling:

```jsx
import { Link, Text } from 'react-elemental';

...

<Text color="primary">
  <Link activeColor="black" href="https://github.com">
    Click me
  </Link>
</Text>
```

#### Usage with `react-router` and other declarative routing abstractions

`react-router` ships with a `Link` component that provides a declarative abstraction over client-side navigation. This conflicts slightly with the responsibility of React Elemental's `Link` as a declarative styling abstraction, since both components wrap `<a>` elements.

The recommended way to maintain a declarative interface is to create a new component that serves as an abstraction over both styling and navigation.

```jsx
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link as ElementalLink } from 'react-elemental';

export deafult class Link extends Component {
  handleClick = (evt) => {
    const { history, href } = this.props;
    
    evt.preventDefault();
    history.push(href);
  };
  
  render() {
    return (
      <ElementalLink
        {...this.props}
        onClick={this.handleClick}
      />
    );
  }
}
```
