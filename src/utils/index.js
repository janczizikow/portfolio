/* eslint-disable import/prefer-default-export */
export const updateStateObject = (prevState, nextState) => ({
  ...prevState,
  ...nextState,
});
