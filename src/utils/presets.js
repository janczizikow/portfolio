import theme from './theme';

export default {
  sm: `@media only screen and (min-width: ${theme.breakpoints[0]})`,
  md: `@media only screen and (min-width: ${theme.breakpoints[1]})`,
  lg: `@media only screen and (min-width: ${theme.breakpoints[2]})`,
  xl: `@media only screen and (min-width: ${theme.breakpoints[3]})`,
};
