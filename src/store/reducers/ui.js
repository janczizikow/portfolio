// @flow
import * as actionTypes from '../actions/actionTypes';
import { updateStateObject } from '../../utils';
import theme, { colorThemes } from '../../utils/theme';
import type { Theme } from '../../utils/types';
import type { UIActions } from '../actions/ui';

export type UIState = {
  +isMobileMenuOpen: boolean,
  +isModalOpen: boolean,
  +theme: Theme,
};

const initialState = {
  isMobileMenuOpen: false,
  isModalOpen: false,
  theme: {
    activeTheme: 'light',
    ...theme,
  },
};

const openMobileMenu = (state: UIState) =>
  updateStateObject(state, {
    isMobileMenuOpen: true,
  });

const closeMobileMenu = (state: UIState) =>
  updateStateObject(state, {
    isMobileMenuOpen: false,
  });

const switchTheme = (state: UIState) => {
  const colorTheme =
    state.theme.activeTheme === 'light' ? colorThemes.dark : colorThemes.light;

  return updateStateObject(state, {
    theme: {
      ...state.theme,
      activeTheme: state.theme.activeTheme === 'light' ? 'dark' : 'light',
      colors: {
        ...state.theme.colors,
        ...colorTheme,
      },
    },
  });
};

const reducer = (state: UIState = initialState, action: UIActions): UIState => {
  switch (action.type) {
    case actionTypes.OPEN_MOBILE_MENU:
      return openMobileMenu(state);
    case actionTypes.CLOSE_MOBILE_MENU:
      return closeMobileMenu(state);
    case actionTypes.SWITCH_THEME:
      return switchTheme(state);
    default:
      return state;
  }
};

export default reducer;
