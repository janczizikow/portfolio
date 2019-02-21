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
  const [theme, setTheme] = useState(defaultTheme);
  const [activeTheme, setActiveTheme] = useState('light');

  const toggleTheme = () => {
    if (activeTheme === 'light') {
      setActiveTheme('dark');
    } else {
      setActiveTheme('light');
    }

    setTheme({
      ...theme,
      colors: { ...theme.colors, ...colorThemes[activeTheme] },
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
