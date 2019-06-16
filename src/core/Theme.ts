import * as React from 'react';

export type Theme = {
  primary: string,
  secondary: string,
};

const defaultTheme: Theme = {
  primary: '#fff',
  secondary: '#ccc',
};

export const ThemeContext: React.Context<Theme> = React.createContext(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
