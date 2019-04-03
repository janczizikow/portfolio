import React, { useState } from 'react';
import PropTypes from 'prop-types';
import defaultTheme, { colorThemes } from '../utils/theme';

const ThemeContext = React.createContext({
  theme: {},
  activeTheme: '',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
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
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export { ThemeContext as default, ThemeProvider };
