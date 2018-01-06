export default {
  name: 'Spinner',
  description: 'Spinners indicate indeterminate progress when there is no clearly defined ' +
    'container in the interface.',
  props: [
    {
      key: '`color`',
      description: 'Spinner pulsation color constant or CSS color expression literal.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`size`',
      description: 'One of `\'alpha\'`, `\'beta\'`, `\'gamma\'`, or `\'delta\'` describing the ' +
        'size (diameter) of the spinner.',
      defaultValue: '`\'beta\'`',
    },
    {
      key: '`pulsate`',
      description: '`true` to enable spinner pulsation; `false` otherwise.',
      defaultValue: '`true`',
    },
    {
      key: '`transparent`',
      description: '`true` to use a transparent spinner background (visible when the pulsation ' +
        'transitions the spinner to an idle state); `false` to use the default almost-white ' +
        'background. The default background is well-suited for light contexts but not dark ' +
        'contexts.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
