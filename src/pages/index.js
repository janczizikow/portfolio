// @flow
import React from 'react';
// import { Link } from 'gatsby';
import Layout from 'layout';
import Hero from 'components/Hero';
import Projects from 'components/Projects';
import Cta from 'components/Cta';

export default () => (
  <Layout>
    <Hero />
    <Projects />
    <Cta />
  </Layout>
);
