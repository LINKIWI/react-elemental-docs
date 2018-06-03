export default {
  name: 'TextArea',
  description: 'Allow the user to enter an arbitrary-length text blob.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/text-area.js',
  props: [
    {
      key: '`error`',
      description: 'String literal for the error message to display, if the component is in an ' +
        'error state.',
      defaultValue: '`null`',
    },
    {
      key: '`secondary`',
      description: '`true` to use the secondary `TextArea` style; `false` otherwise.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
