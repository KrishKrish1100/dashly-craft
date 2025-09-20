import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, darkTheme } from '../../theme/theme';

const ThemeProviderContext = createContext({
  theme: 'light',
  setTheme: () => null,
});

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'dashboard-theme',
  ...props
}) {
  const [themeMode, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(storageKey) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, themeMode);
  }, [themeMode, storageKey]);

  const value = {
    theme: themeMode,
    setTheme: (theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <MuiThemeProvider theme={themeMode === 'dark' ? darkTheme : theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeProviderContext.Provider>
  );
}