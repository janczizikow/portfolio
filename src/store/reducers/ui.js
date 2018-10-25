import * as actionTypes from '../actions/actionTypes';
import { updateStateObject } from '../../utils';
import theme, { colorThemes } from '../../utils/theme';

const initialState = {
  isMobileMenuOpen: false,
  isModalOpen: false,
  theme: {
    activeTheme: 'light',
    ...theme,
  },
};

const openMobileMenu = state =>
  updateStateObject(state, {
    isMobileMenuOpen: true,
  });

const closeMobileMenu = state =>
  updateStateObject(state, {
    isMobileMenuOpen: false,
  });

const switchTheme = state => {
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

const reducer = (state = initialState, action) => {
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
