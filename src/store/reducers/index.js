import { combineReducers } from 'redux';
import uiReducer from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
