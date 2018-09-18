import React, { type Node } from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/createStore';

const store = createStore();

export default ({ element }: { element: Node }) => (
  <Provider store={store}>{element}</Provider>
);
