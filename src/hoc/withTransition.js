import React from 'react';
import PageTransition from '../components/PageTransition';

export default ({ element, props }) => (
  <PageTransition {...props}>{element}</PageTransition>
);
