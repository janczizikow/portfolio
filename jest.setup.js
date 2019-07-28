/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
};
