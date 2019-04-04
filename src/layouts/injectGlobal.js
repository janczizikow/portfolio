import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Global as EmotionGlobal, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const propTypes = {
  theme: PropTypes.instanceOf(Object),
};

class Global extends Component {
  shouldComponentUpdate(nextProps) {
    const { theme } = this.props;
    return (
      theme.colors.bgColor !== nextProps.theme.colors.bgColor ||
      theme.colors.textColor !== nextProps.theme.colors.textColor
    );
  }

  render() {
    const { theme } = this.props;

    return (
      <EmotionGlobal
        styles={css`
          html {
            overflow-y: initial;
          }

          body {
            padding: 0;
            margin: 0;
            background: ${theme.colors.bgColor};
            text-rendering: optimizeLegibility;
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
        `}
      />
    );
  }
}

Global.propTypes = propTypes;

export default withTheme(Global);
