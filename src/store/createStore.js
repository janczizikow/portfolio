import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  form: formReducer,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const createStore = () =>
  reduxCreateStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default createStore;
