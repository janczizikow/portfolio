import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const propTypes = {
  element: PropTypes.node.isRequired,
};

const store = configureStore();

const withProvider = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

withProvider.propTypes = propTypes;

export default withProvider;
