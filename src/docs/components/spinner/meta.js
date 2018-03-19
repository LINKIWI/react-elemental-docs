export default {
  name: 'Spinner',
  description: 'Spinners indicate indeterminate progress when there is no clearly defined ' +
    'container in the interface.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/spinner.js',
  props: [
    {
      key: '`size`',
      description: 'One of `\'alpha\'`, `\'beta\'`, `\'gamma\'`, or `\'delta\'` describing the ' +
      'size (diameter) of the spinner.',
      defaultValue: '`\'alpha\'`',
    },
    {
      key: '`ringColor`',
      description: 'Color constant or CSS expression literal describing the color of the spinner ' +
        'ring.',
      defaultValue: '`colors.gray5`',
    },
    {
      key: '`accentColor`',
      description: 'Color constant or CSS expression literal describing the color of the ' +
        'spinning highlight within the ring.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`duration`',
      description: 'Time, in seconds, required to complete one full cycle of the spinning ' +
        'animation. Lower values describe higher animation speeds.',
      defaultValue: '`0.65`',
    },
    {
      key: '`thickness`',
      description: 'Width, in pixels, of the spinner ring.',
      defaultValue: '`3`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
  ],
};
