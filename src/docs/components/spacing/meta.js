export default {
  name: 'Spacing',
  description: 'Spacing elements wrap standard margin and padding sizes for consistent layouts.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/spacing.js',
  props: [
    {
      key: '`size`',
      description: 'The name of a spacing constant (e.g. `\'large\'`) or a CSS size expression ' +
        '(e.g. `\'30px\'`).',
      defaultValue: '`\'default\'`',
    },
    {
      key: '`top`',
      description: '`true` to add spacing to the top.',
      defaultValue: '`false`',
    },
    {
      key: '`right`',
      description: '`true` to add spacing to the right.',
      defaultValue: '`false`',
    },
    {
      key: '`bottom`',
      description: '`true` to add spacing to the bottom.',
      defaultValue: '`false`',
    },
    {
      key: '`left`',
      description: '`true` to add spacing to the left.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
    {
      key: '`padding`',
      description: '`true` to use the spacing as a `padding` rather than a `margin` property.',
      defaultValue: '`false`',
    },
    {
      key: '`inline`',
      description: '`true` to use an inline `<span>` element instead of a block `<div>` element.',
      defaultValue: '`false`',
    },
    {
      key: '`children`',
      description: 'Any React element(s) contained with the wrapping spacing element.',
      defaultValue: '`null`',
    },
  ],
};
