// themes
export const colorModes = {
  light: {
    headingColor: 'var(--headingColor, #2a2a30)',
    textColor: 'var(--textColor, #696c7b)',
    bgColor: 'var(--bgColor, #fff)',
    bgGreyColor: 'var(--bgGreyColor, #f9f9f9)',
    bgHeader: 'var(--bgHeader, hsla(0,0%,100%,.96))',
    bgAlt: 'var(--bgAlt, #2a2a30)',
  },
  dark: {
    headingColor: 'var(--headingColor, #fff)',
    textColor: 'var(--textColor, #adb7be)',
    bgColor: 'var(--bgColor, #232323)',
    bgGreyColor: 'var(--bgGreyColor, #353535)',
    bgHeader: 'var(--bgHeader, #27282a)',
    bgAlt: 'var(--bgAlt, #27282a)',
  },
};

export const PRIMARY_COLOR = '#277cea';

// colors
const colors = {
  primary: PRIMARY_COLOR,
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

export const typography = {
  headerFontFamily: fontStack,
  bodyFontFamily: fontStack,
  overrideStyles: () => ({
    body: {
      color: colors.textColor,
    },
    'h1, h2, h3, h4, h5, h6': {
      color: colors.headingColor,
      fontWeight: 500,
    },
  }),
};

// grid
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const breakpoints = ['576px', '768px', '992px', '1200px'];
const containerWidths = ['100%', 540, 720, 960, 1200];
export const grid = { breakpoints, containerWidths };

const headerHeight = '3.625rem';

export const lightTheme = {
  mode: 'light',
  colors: {
    ...colors,
    ...colorModes.light,
  },
  space,
  typography,
  breakpoints,
  containerWidths,
  grid,
  headerHeight,
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    ...colors,
    ...colorModes.dark,
  },
  space,
  typography,
  breakpoints,
  containerWidths,
  grid,
  headerHeight,
};
