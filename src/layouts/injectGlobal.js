// @flow
import React, { Component } from 'react';
import { injectGlobal } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import type { Theme } from '../utils/types';

type GlobalProps = {
  theme: Theme,
  children: {},
};

class Global extends Component<GlobalProps> {
  componentDidUpdate(prevProps) {
    const { theme } = this.props;

    if (theme.colors.bgColor !== prevProps.theme.colors.bgColor) {
      window.document.body.style.backgroundColor = theme.colors.bgColor;
    }

    if (theme.colors.textColor !== prevProps.theme.colors.textColor) {
      window.document.body.style.color = theme.colors.textColor;
    }
  }

  render() {
    const { theme, children } = this.props;

    injectGlobal`
      *::before,
      *::after,
      * {
        box-sizing: border-box;
      }

      html {
        box-sizing: border-box;
      }

      body {
        padding: 0;
        margin: 0;
        background: ${theme.colors.bgColor};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }

      .headroom {
        height: ${theme.headerHeight};
      }

      .headroom--scrolled {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .ReactModal__Content {
        opacity: 0;
        transform: scale(0.9);
      }

      .ReactModal__Content--after-open {
        opacity: 1;
        transform: scale(1);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .ReactModal__Content--before-close {
        opacity: 0;
        transform: scale(0.9);
      }

      .lock-scroll {
        overflow: hidden;
      }

        input:-webkit-autofill,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:hover,
        select:-webkit-autofill,
        select:-webkit-autofill:focus,
        select:-webkit-autofill:hover,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:hover {
          border-radius: 0.25rem;
        }

        ::selection {
          color: #fff;
          background-color: ${theme.colors.primary};
        }
    `;

    return React.Children.only(children);
  }
}

export default withTheme(Global);
