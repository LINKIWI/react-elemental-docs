export default {
  name: 'Tag',
  description: 'Tags serve as simple, textual status indicators.',
  props: [
    {
      key: '`outlineColor`',
      description: 'Color constant or CSS color expression literal for the color of the tag ' +
        'outline and tag text.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`backgroundColor`',
      description: 'Color constant or CSS color expression literal for the background color of ' +
        'the tag.',
      defaultValue: '`colors.primaryLight`',
    },
    {
      key: '`text`',
      description: 'String literal to feature as the tag\'s text.',
    },
    {
      key: '`size`',
      description: 'One of `\'alpha\'` or `\'beta\'` describing the desired size of the tag.',
      defaultValue: '`\'beta\'`',
    },
    {
      key: '`dismissible`',
      description: '`true` to allow the tag to be dismissible; `false` otherwise.',
      defaultValue: '`false`',
    },
    {
      key: '`onDismiss`',
      description: 'Callback function invoked when the user dismisses a `dismissible` tag.',
      defaultValue: '`() => {}`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
