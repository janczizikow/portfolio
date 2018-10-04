import React, { Component } from 'react';
import { injectGlobal } from 'react-emotion';
import { withTheme } from 'emotion-theming';
/* eslint-disable */
class Global extends Component {
  componentDidUpdate(prevProps) {
    const { theme } = this.props;

    if (theme.colors.bgColor !== prevProps.theme.colors.bgColor) {
      window.document.body.style.backgroundColor = theme.colors.bgColor;
    }

    if (theme.colors.textColor !== prevProps.theme.colors.textColor) {
      window.document.body.style.color = this.props.theme.colors.textColor;
    }
  }

  render() {
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
        background: ${this.props.theme.colors.bgColor};
        -webkit-font-smoothing: antialiased;
      }

      .headroom {
        height: ${this.props.theme.headerHeight};
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
          background-color: ${this.props.theme.colors.primary};
        }
    `;
    return React.Children.only(this.props.children);
  }
}

export default withTheme(Global);
