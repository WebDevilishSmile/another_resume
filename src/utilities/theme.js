import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#ebe8e8',
      main: '#B08968',
      dark: '#351c15',
    },
    secondary: {
      light: '#fff8e6',
      main: '#e6ccb2',
    },
    background: {
      dark: '#351c15',
      medium: '#B08968',
      light: '#ebe8e8',
    },
    text: {
      light: '#ebe8e8',
      dark: '#050302',
      main: '#050302',
    },
  },
  typography: {
    fontFamily: 'inherit',
    h1: { fontWeight: '600', fontSize: '4rem', textTransform: 'uppercase' },
    h2: { fontWeight: '600', fontSize: '3.5rem', textTransform: 'uppercase' },
    h3: { fontWeight: '500', fontSize: '3rem', textTransform: 'uppercase' },
    h4: { fontWeight: '500', fontSize: '2.5rem' },
    h5: { fontWeight: '400', fontSize: '2rem' },
    h6: { fontWeight: '500', fontSize: '1.25rem' },
    body1: { fontWeight: '400', fontSize: '1rem', color: '#000' },
    body2: { fontWeight: '400', fontSize: '1.6rem' },
    body3: { fontWeight: '400', fontSize: '.75rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: montserrat,
      },
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 200,
      sm: 400,
      md: 600,
      lg: 800,
      xl: 1000,
      xxl: 1200,
    },
  },
});

export default theme;
