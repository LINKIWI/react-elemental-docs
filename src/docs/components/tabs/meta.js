export default {
  name: 'Tabs',
  description: 'Tabs allow visual segmentation of categories within the same semantic hierarchy.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/tabs/index.js',
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
      key: '`secondary`',
      description: 'True to use the secondary style; false to use the primary style.',
      defaultValue: '`false`',
    },
    {
      key: '`fit`',
      description: 'True to fit the width of each tab option to its children; false to evenly ' +
        'space the width of each tab option, independent of child width.',
      defaultValue: '`false`',
    },
    {
      key: '`invert`',
      description: 'Relevant to secondary style Tabs only. True to place the selection highlight ' +
        'above the option children, rather than below the option children.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
