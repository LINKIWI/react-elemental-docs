export default {
  name: 'Image',
  description: 'Presentational wrapper around standard images.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/image.js',
  experimental: true,
  props: [
    {
      key: '`alt`',
      description: 'Accessibility alternate text for the image.',
    },
    {
      key: '`color`',
      description: '"Average" color of the image, used as the placeholder background color ' +
        'displayed while the image is loading.',
      defaultValue: '`rgb(250, 250, 250)`',
    },
    {
      key: '`width`',
      description: 'CSS string describing the width of the image. Exact values are recommended.',
      defaultValue: '`auto`',
    },
    {
      key: '`height`',
      description: 'CSS string describing the height of the image. Exact values are recommended.',
      defaultValue: '`auto`',
    },
    {
      key: '`lazy`',
      description: '`true` to lazily load the image, i.e. only starting the network request once ' +
        'the image node becomes visible in the viewport. `false` to start fetching the image ' +
        'immediately after the component is mounted.',
      defaultValue: '`false`',
    },
    {
      key: '`showIntermediate`',
      description: '`true` to display the intermediate image while the network fetch is still in ' +
        'progress. `false` to use the default behavior of displaying the placeholder until the ' +
        'image has been fully fetched. Enabling this prop is recommended for progressive JPEGs ' +
        'to provide the perception of a faster load.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional style overrides on the top-level image container element.',
      defaultValue: '`{}`',
    },
    {
      key: '`imgStyle`',
      description: 'Optional style overrides on the `<img>` element itself.',
      defaultValue: '`{}`',
    },
  ],
};
