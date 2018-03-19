export default {
  name: 'Alert',
  description: 'Alerts are used to educate the user about the current state of the application.',
  source: 'https://github.com/LINKIWI/react-elemental/blob/master/src/components/alert.js',
  props: [
    {
      key: '`type`',
      description: 'One of `\'info\'`, `\'success\'`, `\'warn\'`, or `\'error\'`, denoting the ' +
        'alert type.',
      defaultValue: '`\'info\'`',
    },
    {
      key: '`size`',
      description: 'One of `\'alpha\'` or `\'beta\'`, denoting the size of the alert.',
      defaultValue: '`\'alpha\'`',
    },
    {
      key: '`title`',
      description: 'Text title of the alert, displayed in bold.',
    },
    {
      key: '`message`',
      description: 'Text or a React element for the alert\'s message.',
      defaultValue: '',
    },
    {
      key: '`dismissible`',
      description: 'True to provide a close button to allow the user to dismiss the alert.',
      defaultValue: '`false`',
    },
    {
      key: '`style`',
      description: 'Optional style overrides object.',
      defaultValue: '`{}`',
    },
    {
      key: '`onDismiss`',
      description: 'Callback function invoked if the alert is dismissible when the user ' +
        'dismisses the alert. Alert is a controlled component; it is the responsibility of the ' +
        'parent component to control the alert\'s visibility.',
      defaultValue: '`() => {}`',
    },
  ],
};
