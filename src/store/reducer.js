import * as actionTypes from './actions/actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
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
