export default {
  name: 'Tabs',
  description: 'Tabs allow visual segmentation of categories within the same semantic hierarchy.',
  props: [
    {
      key: '`options`',
      description: 'Array of objects describing the displayed tabs. Each object should have ' +
        'properties `value`, a unique identifier for the tab entry, and `label`, the displayed ' +
        'text on the tab entry.',
      defaultValue: '`[]`',
    },
    {
      key: '`value`',
      description: 'The currently selected tab entry. This prop should correspond to one of the ' +
        '`value` identifiers passed in the `options` prop.',
      defaultValue: '`null`',
    },
    {
      key: '`onChange`',
      description: 'Unary callback function invoked when the user changes the selected tab ' +
        'entry with the `value` of that entry.',
      defaultValue: '`() => {}`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
