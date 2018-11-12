// @flow
import { combineReducers } from 'redux';
import uiReducer, { type UIState } from './ui';

export type AppState = {
  +ui: UIState,
};

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
