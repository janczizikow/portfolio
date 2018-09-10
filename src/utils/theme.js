// colors
const colors = {
  primary: '#277cea',
  primaryLight: '#68a4f1',
  success: '#8fd896',
  error: '#ff6161',
  dark: '#2a2a30',
  lightDark: '#696c7b',
  grey: '#ededed',
  lightGrey: '#f9f9f9',
  white: '#fff',
};

const fontStack = [
  'Avenir Next',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
];

// typography
const typography = {
  headerFontFamily: fontStack,
  bodyFontFamily: fontStack,
};

// grid
// const breakpoints = ['36em', '48em', '62em', '75em'];
const breakpoints = [576, 768, 992, 1200];
const gutterWidth = 32;
const containerWidths = breakpoints.map(
  breakpoint => breakpoint - gutterWidth / 2
);

const grid = { breakpoints, gutterWidth, containerWidths };

const headerHeight = '3.625rem';

export default {
  colors,
  typography,
  grid,
  headerHeight,
};
