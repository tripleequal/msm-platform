import type {} from '@mui/x-data-grid/themeAugmentation'
import { createTheme } from '@mui/material'

const SERIF = `'Noto Serif', serif;`
const SANS_SERIF = `'Quicksand', sans-serif`

const GRAYSCALE = {
  100: '#f4f4f4',
  200: '#ececec',
  400: '#bbbbbb',
  500: '#9b9b9b',
  600: '#727272',
  700: '#5f5f5f',
  800: '#404040',
  900: '#1f1f1f',
}

export const adminMuiTheme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: GRAYSCALE[800],
      secondary: GRAYSCALE[600],
    },
  },
  typography: {
    body2: {
      color: GRAYSCALE[600],
    },
    fontFamily: SANS_SERIF,
    h1: {
      fontFamily: SERIF,
    },
    h2: {
      fontFamily: SERIF,
    },
    h3: {
      fontFamily: SERIF,
    },
    h4: {
      fontFamily: SERIF,
    },
    h5: {
      fontFamily: SERIF,
    },
    h6: {
      fontFamily: SERIF,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: SERIF,
        },
      },
    },
  },
})

export const adminFullTheme = {
  ...adminMuiTheme,
  drawerWidth: '240px',
  halfSpacing: '4px',
}
