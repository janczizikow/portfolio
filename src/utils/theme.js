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

// typography
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

const typography = {
  headerFontFamily: fontStack,
  bodyFontFamily: fontStack,
  overrideStyles: () => ({
    body: {
      color: colors.lightDark,
    },
    'h1, h2, h3, h4, h5, h6': {
      color: colors.dark,
      fontWeight: 500,
    },
  }),
};

// grid
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const breakpoints = ['576px', '768px', '992px', '1200px'];
const containerWidths = ['100%', 540, 720, 960, 1200];
const grid = { breakpoints, containerWidths };

const headerHeight = '3.625rem';

export default {
  colors,
  space,
  typography,
  breakpoints,
  containerWidths,
  grid,
  headerHeight,
};
