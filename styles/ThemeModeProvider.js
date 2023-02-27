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
        console.log('有按到');
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
          // ...(mode === 'light'
          //   ? {
          //       primary: {
          //         main: '#E1306C',
          //         light: 'rgb(231, 89, 137)',
          //         dark: 'rgb(157, 33, 75)',
          //       },
          //       secondary: {
          //         main: '#405DE6',
          //         light: 'rgb(102, 125, 235)',
          //         dark: 'rgb(44, 65, 161)',
          //       },
          //     }
          //   : {
          //       primary: {
          //         main: 'rgb(231, 89, 137)',
          //         light: 'rgb(235, 122, 160)',
          //         dark: 'rgb(161, 62, 95)',
          //       },
          //       secondary: {
          //         main: 'rgb(102, 125, 235)',
          //         light: 'rgb(132, 151, 239)',
          //         dark: 'rgb(71, 87, 164)',
          //       },
          //     }),
          // Default theme viewer
          // https://mui.com/material-ui/customization/dark-mode/
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
                boxShadow:
                  // '0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 2%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
                  '0 4px 2px -2px rgb(0 0 0 / 15%)',
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
