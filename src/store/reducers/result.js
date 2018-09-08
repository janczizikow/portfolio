import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.res }),
      };
    case actionTypes.REMOVE_RESULT:
      return {
        ...state,
        results: state.results.filter(el => el.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
