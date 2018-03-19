export default {
  name: 'LoadingBar',
  description: 'Loading bars indicate indeterminate progress.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/loading-bar.js',
  props: [
    {
      key: '`color`',
      description: 'Color of the loading bar stroke.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`thickness`',
      description: 'Thickness, in pixels, of the loading bar stroke.',
      defaultValue: '`4`',
    },
    {
      key: '`duration`',
      description: 'Total number of milliseconds required to move the loading bar stroke from ' +
        'one end of the container to the other.',
      defaultValue: '`900`',
    },
    {
      key: '`delay`',
      description: 'Total number of milliseconds to delay between each bounce of the loading ' +
        'bar stroke from one end of the container to the other. In other words, the animation ' +
        'will pause for this number of milliseconds before starting again.',
      defaultValue: '`125`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides to apply to the stroke element.',
      defaultValue: '`{}`',
    },
  ],
};
