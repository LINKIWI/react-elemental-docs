#### Lazy loading

`Image` lazy loading refers to only starting the network fetch for the remote image resource after the component is scrolled into view. It uses the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API to detect when the node is visible in the viewport.

The API is relatively new and is not available in older browsers. If `IntersectionObserver` is not available on the client, the image will be mounted immediately, effectively providing the same behavior as a non-lazily loaded image. For this reason, in most use cases it is recommended to set the `lazy` prop, unless it is required for the image to be fetched as soon as possible.

#### Intermediate loading states

By default, browsers will display the intermediate, not-fully-loaded image while a network fetch for the remote image resource is still in progress. Since this usually leads to an unpleasant experience of a partially loaded image, default `Image` behavior is to wait until the image has fully loaded before making it visible.

To allow displaying intermediate states of an image, set the `showIntermediate` prop. This is recommended for progressive JPEGs, which do not load images in scanlines as in traditional JPEGs.

Try simulating a slow connection in devtools and refreshing this page to observe the effect on real images.
