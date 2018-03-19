export default {
  name: 'Tooltip',
  description: 'Tooltips are used to provide contextual information on specific elements for ' +
    'purposes of user education.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/tooltip.js',
  props: [
    {
      key: '`contents`',
      description: 'React elements for the tooltip contents.',
    },
    {
      key: '`persistent`',
      description: '`true` to always display the tooltip; `false` to only display it on hover.',
      defaultValue: '`false`',
    },
    {
      key: '`width`',
      description: 'A number in pixels or a CSS expression literal describing the desired width ' +
        'of the tooltip contents.',
      defaultValue: '`\'auto\'`',
    },
    {
      key: '`offset`',
      description: 'Optional horizontal pixel offset of the tooltip contents. Specify a positive ' +
        'number for offsets to the right, or a negative number for offsets to the left.',
      defaultValue: '`0`',
    },
    {
      key: '`top`',
      description: '`true` to position the tooltip above the children.',
      defaultValue: '`true`',
    },
    {
      key: '`bottom`',
      description: '`true` to position the tooltip below the children. It does not make sense to ' +
        'enable this attribute and the `top` attribute at the same time.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
    {
      key: '`children`',
      description: 'The element(s) for which the tooltip is relevant. For non-persistent ' +
        'tooltips, the tooltip will be displayed any time the user hovers over these children.',
      defaultValue: '`null`',
    },
  ],
};
