export default {
  name: 'Button',
  description: 'Buttons convey user actionability.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/button.js',
  props: [
    {
      key: '`color`',
      description: 'Color of the button.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`size`',
      description: 'One of `\'alpha\'`, `\'beta\'`, or `\'gamma\'` describing the size of the ' +
        'button.',
      defaultValue: '`\'beta\'`',
    },
    {
      key: '`text`',
      description: 'Optional text to display, in a pre-formatted style, in the center of the ' +
        'button.',
      defaultValue: '`null`',
    },
    {
      key: '`disabled`',
      description: 'True to disable the button, which applies the disabled styling and prevents ' +
        'the user from being able to click the button.',
      defaultValue: '`false`',
    },
    {
      key: '`secondary`',
      description: 'True to use the secondary button styling.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional style overrides to apply to the `<button>` element.',
      defaultValue: '`{}`',
    },
    {
      key: '`children`',
      description: 'Optional React element to render within the button, in addition to the text ' +
        '(if specified).',
      defaultValue: '`null`',
    },
  ],
};
