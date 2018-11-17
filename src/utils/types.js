// @flow
export type Project = {
  id: string,
  name: string,
  slug: string,
  description: string,
  date: string,
  links?: {
    text: string,
    url: string,
  }[],
};

export type ProjectNav = {
  name: string,
  slug: string,
};

type Colors = {
  primary: string,
  primaryLight: string,
  success: string,
  error: string,
  dark: string,
  lightDark: string,
  grey: string,
  lightGrey: string,
  white: string,
  headingColor: string,
  textColor: string,
  bgColor: string,
  bgGreyColor: string,
  bgHeader: string,
  bgAlt: string,
};

export type Theme = {
  activeTheme: 'light' | 'dark',
  breakpoints: Array<string>,
  colors: Colors,
  containerWidths: Array<string | number>,
  grid: {
    breakpoints: Array<string>,
    containerWidths: Array<string | number>,
  },
  headerHeight: '3.625rem',
  space: Array<number>,
};

export type UIState = {
  +isMobileMenuOpen: boolean,
  +isModalOpen: boolean,
  +theme: Theme,
};

export type State = {
  ui: UIState,
};

export type Action = {
  type: 'OPEN_MOBILE_MENU' | 'CLOSE_MOBILE_MENU' | 'SWITCH_THEME',
};

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
