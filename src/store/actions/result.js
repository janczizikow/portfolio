import * as actionTypes from './actionTypes';

export const saveResult = res => ({ type: actionTypes.STORE_RESULT, res });
export const storeResult = res => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const removeResult = id => ({ type: actionTypes.REMOVE_RESULT, id });
