export default {
  name: 'RadioGroup',
  description: 'Radio groups allow selection of a single option from a pool of multiple values.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/radio-group/' +
    'index.js',
  props: [
    {
      key: '`options`',
      description: 'Array of radio options, each an object containing keys `value`, `label`, and ' +
        'optionally `disabled`.',
      defaultValue: '`[]`',
    },
    {
      key: '`value`',
      description: 'String value indicating the currently selected radio option. An active ' +
        'indicator is rendered if `value` is set to one of the values specified in `options`; ' +
        'otherwise, no options are rendered as selected.',
      defaultValue: '`null`',
    },
    {
      key: '`accentColor`',
      description: 'CSS color string describing the color to use to indicate an actively ' +
        'selected option.',
      defaultValue: '`colors.primary`',
    },
    {
      key: '`idleColor`',
      description: 'CSS color string describing the color to use to indicate a non-actively ' +
        'selected option.',
      defaultValue: '`colors.gray10`',
    },
    {
      key: '`radioRenderer`',
      description: 'Function dictating how individual radio options should be rendered; see ' +
        'documentation below for usage details.',
      defaultValue: '`(option) => node`',
    },
    {
      key: '`onChange`',
      description: 'Function called with an option `value` whenever the currently selected ' +
        'option changes (either by a mouse event or a keyboard event).',
      defaultValue: '`() => {}`',
    },
  ],
};
