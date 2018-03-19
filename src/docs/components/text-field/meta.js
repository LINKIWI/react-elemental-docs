export default {
  name: 'TextField',
  description: 'Text fields are used for accepting user text input.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/text-field.js',
  props: [
    {
      key: '`error`',
      description: 'String literal for the error message to display, if the component is in an ' +
        'error state.',
      defaultValue: '`null`',
    },
    {
      key: '`secondary`',
      description: '`true` to use the secondary `TextField` style; `false` otherwise.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
