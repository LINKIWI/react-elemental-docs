export default {
  name: 'Pulsator',
  description: 'Pulsators serve as activity status indicators.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/pulsator.js',
  props: [
    {
      key: '`color`',
      description: 'Pulsation color constant or CSS color expression literal.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`size`',
      description: 'One of `\'alpha\'`, `\'beta\'`, `\'gamma\'`, or `\'delta\'` describing the ' +
        'size (diameter) of the pulsator.',
      defaultValue: '`\'beta\'`',
    },
    {
      key: '`inactive`',
      description: '`true` to disable pulsation and always display the pulsation color; `false` ' +
        'otherwise for normal pulsation behavior.',
      defaultValue: '`false`',
    },
    {
      key: '`transparent`',
      description: '`true` to use a transparent pulsator background (visible when the pulsation ' +
        'transitions the pulsator to an idle state); `false` to use the default almost-white ' +
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
