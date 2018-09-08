import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from 'assets/images/gatsby-logo.svg';

const propTypes = {
  siteTitle: PropTypes.string,
};

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: '1.45rem',
      width: '100%',
      borderBottom: '1px solid rgb(245, 243, 247)',
    }}
  >
    <div
      style={{
        padding: '0 1.0875rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 960,
      }}
    >
      <Link
        to="/"
        style={{
          padding: '0.75rem 0',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Logo style={{ width: 107 }} />
      </Link>
      <a
        href="https://github.com/janczizikow/gatsby-sleek"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          padding: '0.75rem 0',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h5 style={{ margin: 0 }}>{siteTitle}</h5>
      </a>
    </div>
  </header>
);

Header.propTypes = propTypes;

export default Header;
