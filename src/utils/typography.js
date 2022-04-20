import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
import { typography as themeTypograhpy } from './themes';

const typography = new Typography({
  ...bootstrapTheme,
  ...themeTypograhpy,
});

export default typography;
