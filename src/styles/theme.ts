import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

export interface CustomTheme extends Theme {
  customTheme: {
    colors: {
      terciary: string;
    };
  };
}

let theme = createTheme(
  {
    palette: {
      primary: {
        main: '#0DB3D9',
      },
      secondary: {
        main: '#F2F2F2',
      },
      text: {
        primary: '#152840',
        secondary: '#F2F2F2',
        disabled: '#516073',
      },
    },
    typography: {
      fontFamily: 'Roboto',
      body1: {
        fontSize: '1rem',
      },
      fontSize: 16,
    },
  },
  {
    customTheme: {
      colors: {
        terciary: '#80DDF2',
      },

    },
  }
);
theme = responsiveFontSizes(theme);

export default theme as CustomTheme;
