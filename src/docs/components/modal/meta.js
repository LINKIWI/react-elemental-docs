export default {
  name: 'Modal',
  description: 'Modals are used to present temporarily-relevant UI elements in a overlayed dialog.',
  props: [
    {
      key: '`size`',
      description: 'Size preset for the modal; one of `\'alpha\'`, `\'beta\'`, or `\'gamma\'`.',
      defaultValue: '`\'beta\'`',
    },
    {
      key: '`persistent`',
      description: '`true` to not provide a UI for the user to hide or close the modal. Modal ' +
        'visibility logic is delegated entirely to the parent component.',
      defaultValue: '`false`',
    },
    {
      key: '`onHide`',
      description: 'Callback function invoked for non-persistent modals when the user requests ' +
        'to close the modal.',
      defaultValue: '`() => {}`',
    },
    {
      key: '`style`',
      description: 'Optional object of style overrides.',
      defaultValue: '`{}`',
    },
    {
      key: '`children`',
      description: 'Element(s) describing the modal contents.',
      defaultValue: '`null`',
    },
  ],
};
