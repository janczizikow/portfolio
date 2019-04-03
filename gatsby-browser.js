/* eslint-disable import/prefer-default-export, react/prop-types */
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
