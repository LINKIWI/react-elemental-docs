export default {
  name: 'Link',
  description: 'Links are textual prompts for navigation events.',
  props: [
    {
      key: '`type`',
      description: 'One of `regular`, `plain`, or `underline` describing the type of the link to ' +
        'render. Regular links display an underline on hover and click. Plain links do not ' +
        'display any underlines. Underline links always show the underline.',
      defaultValue: '`\'regular\'`',
    },
    {
      key: '`activeColor`',
      description: 'Link color when it is depressed by a click event (in the `:active` state).',
      defaultValue: '`\'currentColor\'`',
    },
    {
      key: '`href`',
      description: 'Standard link target.',
      defaultValue: '`\'#\'`',
    },
    {
      key: '`style`',
      description: 'Optional style overrides to apply to the wrapped `<a>` element.',
      defaultValue: '`{}`',
    },
    {
      key: '`children`',
      description: 'Arbitrary children of the `<a>` element.',
      defaultValue: '`null`',
    },
  ],
};
