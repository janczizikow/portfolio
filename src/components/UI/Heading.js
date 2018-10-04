import system from 'system-components/emotion';

const Heading = system(
  {
    is: 'h2',
    color: 'headingColor',
  },
  'space',
  'color',
  'fontSize',
  'textAlign',
  'lineHeight',
  'letterSpacing'
);

Heading.displayName = 'Heading';

export default Heading;
