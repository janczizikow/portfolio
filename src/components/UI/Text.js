import system from 'system-components/emotion';

const Text = system(
  {
    is: 'p',
  },
  'space',
  'color',
  'fontSize',
  'textAlign',
  'lineHeight',
  'letterSpacing'
);

Text.displayName = 'Text';

export default Text;
