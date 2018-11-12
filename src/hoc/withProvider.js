// @flow
import React, { type Node } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

type withProviderProps = {
  element: Node,
};

const store = configureStore();

const withProvider = ({ element }: withProviderProps) => (
  <Provider store={store}>{element}</Provider>
);

export default withProvider;
