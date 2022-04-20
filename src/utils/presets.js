import { grid } from './themes';

export default {
  sm: `@media only screen and (min-width: ${grid.breakpoints[0]})`,
  md: `@media only screen and (min-width: ${grid.breakpoints[1]})`,
  lg: `@media only screen and (min-width: ${grid.breakpoints[2]})`,
  xl: `@media only screen and (min-width: ${grid.breakpoints[3]})`,
};
