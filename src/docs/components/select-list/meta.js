export default {
  name: 'SelectList',
  description: 'Select lists are used to allow users to choose one item from a dropdown menu of ' +
    'items.',
  props: [
    {
      key: '`placeholder`',
      description: 'Placeholder text to display in the `SelectList` before an option has been ' +
        'selected by the user.',
      defaultValue: '`\'Select an item...\'`',
    },
    {
      key: '`options`',
      description: 'Array of objects, each with properties `value` and `label`. `value` is a ' +
        'unique identifier for the `SelectList` entry, and `label` is the text to display for ' +
        'the entry.',
      defaultValue: '`[]`',
    },
    {
      key: '`width`',
      description: 'Width, as a CSS expression or a value in pixels, of the `SelectList`.',
      defaultValue: '`\'100%\'`',
    },
    {
      key: '`height`',
      description: 'Height of the `SelectList` in pixels.',
      defaultValue: '`null`',
    },
    {
      key: '`error`',
      description: 'Error message string to display if the component is in an error state.',
      defaultValue: '`null`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
    {
      key: '`onChange`',
      description: 'Unary callback function invoked with the `value` of the entry that was ' +
        'selected by the user.',
      defaultValue: '`() => {}`',
    },
  ],
};
