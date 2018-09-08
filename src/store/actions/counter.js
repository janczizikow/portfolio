import * as actionTypes from './actionTypes';

export const inc = () => ({ type: actionTypes.INC });
export const dec = () => ({ type: actionTypes.DEC });
export const add = value => ({ type: actionTypes.ADD, value });
export const sub = value => ({ type: actionTypes.SUB, value });
