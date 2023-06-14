import { createTheme } from '@mui/material/styles';
import {
  amber, deepOrange, grey, red,
} from '@mui/material/colors';
import { createContext } from 'react';
import { useStateValue } from '../utils/reducers/StateProvider';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Define your light mode palette colors here
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Define your dark mode palette colors here
  },
});
const getDesignTokens = (theme) => ({
  palette: {
    mode: theme,
    primary: {
      ...amber,
      ...(theme === 'dark' && {
        main: amber[300],
      }),
    },
    ...(theme === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(theme === 'light'
        ? {
          primary: grey[900],
          secondary: grey[800],
        }
        : {
          primary: '#fff',
          secondary: grey[500],
        }),
    },
  },
});

export const ThemeContext = createContext(null);
// Create a theme instance.
export const createCustomTheme = (mode) => {
  console.log(mode);
  const designTokens = getDesignTokens(mode);
  return createTheme(designTokens);
};

export default function ThemeProvider() {
  const [{ darkOrLiteTheme }] = useStateValue();

  const paletteMode = darkOrLiteTheme ? 'dark' : 'light';
  const mainPrimaryColor = darkOrLiteTheme ? '#272c34' : '#fff';
  const mainSecondaryColor = darkOrLiteTheme ? '#fff' : '#272c34';

  const darkLightTheme = createTheme({
    palette: {
      mode: paletteMode,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      error: {
        main: red.A400,
      },
      background: {
        default: mainPrimaryColor,
      },
    },
    typography: {
      fontFamily: ['"Libre Barcode 39 Text"', 'Roboto'].join(','),
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            '@media (max-width:600px)': {
              fontSize: '1.0rem',
            },
            '@media (min-width:600px)': {
              fontSize: '1.5rem',
            },
            color: mainSecondaryColor,
          },
        },
      },
    },
  });

  return { darkLightTheme };
}
