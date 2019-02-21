import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme, { colorThemes } from '../../utils/theme';

export const ThemeContext = React.createContext({
  theme: {},
  activeTheme: '',
  toggleTheme: () => {},
});

const Theme = ({ children }) => {
  const [state, setState] = useState({
    theme: defaultTheme,
    activeTheme: 'light',
  });

  const toggleTheme = () => {
    const { theme } = state;
    const nextTheme = state.activeTheme === 'light' ? 'dark' : 'light';

    setState({
      theme: {
        ...theme,
        colors: { ...theme.colors, ...colorThemes[nextTheme] },
      },
      activeTheme: nextTheme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        activeTheme: state.activeTheme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
