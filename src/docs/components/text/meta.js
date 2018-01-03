export default {
  name: 'Text',
  description: 'Text components provide abstractions over typography.',
  props: [
    {
      key: '`secondary`',
      description: '`true` to use the secondary typeface; `false` to use the primary typeface. ' +
        'Both font types are defined in the initial `bootstrap` call to `react-elemental`.',
      defaultValue: '`false`',
    },
    {
      key: '`size`',
      description: 'A size constant or CSS expression literal describing the desired font size.',
      defaultValue: '`\'iota\'`',
    },
    {
      key: '`color`',
      description: 'A color constant or CSS expression literal describing the desired text color.',
      defaultValue: '`colors.gray80`',
    },
    {
      key: '`bold`',
      description: '`true` to use the bold variant of the font; `false` to use the regular ' +
        'variant.',
      defaultValue: '`false`',
    },
    {
      key: '`inline`',
      description: '`true` to use a `<span>` element rather than a `<p>` element in order to ' +
        'inline the text.',
      defaultValue: '`false`',
    },
    {
      key: '`uppercase`',
      description: '`true` to apply a style that makes all characters uppercase; `false` ' +
        'to display the characters as-is without modification.',
      defaultValue: '`false`',
    },
    {
      key: '`center`',
      description: '`true` to center-align the text; `false` to inherit the existing alignment.',
      defaultValue: '`false`',
    },
    {
      key: '`right`',
      description: '`true` to right-align the text; `false` to inherit the existing alignment.',
      defaultValue: '`false`',
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
