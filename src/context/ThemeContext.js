import React, { useReducer, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from '../utils/themes';

const ThemeContext = React.createContext({
  theme: {},
  initalized: false,
  toggleColorMode: () => {},
});

export const STORAGE_KEY = 'theme';

const SET_THEME = 'SET_THEME';
const TOGGLE_THEME = 'THEME_TOGGLE';

const initalState = {
  theme: lightTheme,
  initalized: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        initalized: true,
        theme: action.mode === darkTheme.mode ? darkTheme : lightTheme,
      };
    case TOGGLE_THEME:
      return {
        initalized: state.initalized,
        theme: state.theme.mode === lightTheme.mode ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initalState);

  const toggleColorMode = useCallback(() => {
    document.body.classList.remove(state.theme.mode);
    document.body.classList.add(
      state.theme.mode === lightTheme.mode ? darkTheme.mode : lightTheme.mode
    );

    dispatch({ type: TOGGLE_THEME });
  }, [state.theme.mode]);

  useEffect(() => {
    try {
      const mode = window.localStorage.getItem(STORAGE_KEY);
      const prefersDarkMode =
        window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (mode) {
        dispatch({ type: SET_THEME, mode });
      } else {
        dispatch({
          type: SET_THEME,
          mode: prefersDarkMode ? darkTheme.mode : lightTheme.mode,
        });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (state.initalized) {
      try {
        localStorage.setItem(STORAGE_KEY, state.theme.mode);
      } catch (e) {
        // ignore
      }
    }
  }, [state.initalized, state.theme.mode]);

  const value = useMemo(() => ({ ...state, toggleColorMode }), [
    state,
    toggleColorMode,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

const ThemeConsumer = ThemeContext.Consumer;

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (process.env.NODE_ENV !== 'production' && !context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, ThemeConsumer, useTheme };
