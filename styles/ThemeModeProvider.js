import { useState, useMemo, createContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

export const ThemeModeProvider = (props) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#fff',
                },
                custom: {
                  paper: '#E2E8F0',
                  textPink: '#d63384',
                  textGray: '#757575',
                },
              }
            : {
                background: {
                  default: '#121212',
                },
                custom: {
                  paper: '#2D3748',
                  textPink: '#e270a8',
                  textGray: '#bdbdbd',
                },
              }),
        },
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'Noto Sans TC',
            'sans-serif',
          ].join(','),
          fontSize: 16,
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: '0 4px 2px -2px rgb(0 0 0 / 15%)',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                ':hover': {
                  ...(mode === 'light'
                    ? {
                        boxShadow: '0px 4px 20px rgb(0 0 0 / 20%)',
                        border: '1px solid #1976d2',
                      }
                    : {
                        boxShadow: '0px 4px 20px rgb(220 220 220 / 20%)',
                        border: '1px solid #90caf9',
                      }),
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
