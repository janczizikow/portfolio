import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
import theme from './theme';

const typography = new Typography({
  ...bootstrapTheme,
  ...theme.typography,
});

export default typography;
