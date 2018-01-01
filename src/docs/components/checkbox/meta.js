export default {
  name: 'Checkbox',
  description: 'Checkboxes denote opt-in choices controlled by the user.',
  props: [
    {
      key: '`checked`',
      description: 'Whether the checkbox is checked.',
      defaultValue: '`false`',
    },
    {
      key: '`label`',
      description: 'Text label, in a pre-formatted style, to display alongside the checkbox, ' +
        'providing a description of the control.',
      defaultValue: '`null`',
    },
    {
      key: '`style`',
      description: 'Optional style overrides on the container element.',
      defaultValue: '`{}`',
    },
    {
      key: '`disabled`',
      description: 'True to indicate that the checkbox is disabled. Disabled checkboxes cannot ' +
        'be toggled by the user.',
      defaultValue: '`false`',
    },
    {
      key: '`onChange`',
      description: 'Unary callback function invoked with a single parameter, `isChecked`, when ' +
        'the checkbox is toggled by the user. The parameter passed to the callback indicates ' +
        'the new checked state of the component, after user action.',
      defaultValue: '`() => {}`',
    },
    {
      key: '`children`',
      description: 'Optional children to display alongside the checkbox.',
      defaultValue: '`null`',
    },
  ],
};
