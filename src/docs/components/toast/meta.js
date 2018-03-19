export default {
  name: 'Toast',
  description: 'Toasts are used to present temporary notification alerts.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/toast.js',
  props: [
    {
      key: '`color`',
      description: 'Color constant or CSS expression literal describing the background color of ' +
        'the toast element.',
      defaultValue: '`colors.primaryLight`',
    },
    {
      key: '`accent`',
      description: 'Color constant or CSS expression literal describing the accent color on the ' +
        'toast element.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
    {
      key: '`children`',
      description: 'Arbitrary children with the specified font styling applied; usually a string ' +
        'literal.',
      defaultValue: '`null`',
    },
  ],
};
