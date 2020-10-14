/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

global.React = React;

// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
};
