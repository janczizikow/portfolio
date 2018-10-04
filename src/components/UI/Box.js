import system from 'system-components/emotion';

const Box = system(
  {
    is: 'div',
  },
  'width',
  'space',
  'flex',
  'alignSelf',
  'order',
  'color',
  'textAlign',
  props => ({
    height: props.height,
  })
);

Box.displayName = 'Box';

export default Box;
