import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(221, 83%, 53%)',
      contrastText: 'hsl(0, 0%, 98%)',
    },
    secondary: {
      main: 'hsl(210, 40%, 96%)',
      contrastText: 'hsl(240, 6%, 10%)',
    },
    success: {
      main: 'hsl(142, 76%, 36%)',
      contrastText: 'hsl(0, 0%, 98%)',
    },
    warning: {
      main: 'hsl(38, 92%, 50%)',
      contrastText: 'hsl(0, 0%, 98%)',
    },
    error: {
      main: 'hsl(0, 84%, 60%)',
      contrastText: 'hsl(0, 0%, 98%)',
    },
    info: {
      main: 'hsl(199, 89%, 48%)',
      contrastText: 'hsl(0, 0%, 98%)',
    },
    background: {
      default: 'hsl(0, 0%, 98%)',
      paper: 'hsl(0, 0%, 100%)',
    },
    text: {
      primary: 'hsl(240, 10%, 3.9%)',
      secondary: 'hsl(215, 16%, 47%)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark',
    background: {
      default: 'hsl(240, 10%, 3.9%)',
      paper: 'hsl(240, 10%, 3.9%)',
    },
    text: {
      primary: 'hsl(0, 0%, 98%)',
      secondary: 'hsl(240, 5%, 64%)',
    },
  },
});