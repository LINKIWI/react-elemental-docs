export default {
  name: 'TextArea',
  description: 'Allow the user to enter an arbitrary-length text blob.',
  props: [
    {
      key: '`error`',
      description: 'String literal for the error message to display, if the component is in an ' +
        'error state.',
      defaultValue: '`null`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
