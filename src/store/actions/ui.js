// @flow
import * as actionTypes from './actionTypes';

export type UIActions = {
  type: 'OPEN_MOBILE_MENU' | 'CLOSE_MOBILE_MENU' | 'SWITCH_THEME',
};

export const openMobileMenu = (): UIActions => ({
  type: actionTypes.OPEN_MOBILE_MENU,
});

export const closeMobileMenu = (): UIActions => ({
  type: actionTypes.CLOSE_MOBILE_MENU,
});

export const switchTheme = (): UIActions => ({
  type: actionTypes.SWITCH_THEME,
});
