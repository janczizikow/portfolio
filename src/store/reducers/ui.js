import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isMobileMenuOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: true,
      };
    case actionTypes.CLOSE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
