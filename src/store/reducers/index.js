import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import uiReducer from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  form: formReducer,
});

export default rootReducer;
