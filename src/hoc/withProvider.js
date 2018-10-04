import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createStore from '../store/createStore';

const propTypes = {
  element: PropTypes.node.isRequired,
};

const store = createStore();

const withProvider = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

withProvider.propTypes = propTypes;

export default withProvider;
