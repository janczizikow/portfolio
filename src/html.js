/* eslint-disable jsx-a11y/html-has-lang, react/destructuring-assignment, react/no-danger, react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { STORAGE_KEY } from './context/ThemeContext';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          key="theme"
          dangerouslySetInnerHTML={{
            __html: `(function() {
                try {
                  var mode = localStorage.getItem('${STORAGE_KEY}');
                  var prefersDarkMode =
                    window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!mode && prefersDarkMode) {
                    document.body.classList.add('dark');
                  } else {
                    document.body.classList.add(mode || 'light');
                  }
                } catch (e) {}
              })();`,
          }}
        />
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
