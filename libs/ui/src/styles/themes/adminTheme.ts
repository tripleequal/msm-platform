import type {} from '@mui/x-data-grid/themeAugmentation'
import { createTheme } from '@mui/material'

const SERIF = `'Noto Serif', serif;`
const SANS_SERIF = `'Quicksand', sans-serif`

const GREYSCALE = {
  100: '#f4f4f4',
  200: '#ececec',
  400: '#bbbbbb',
  500: '#9b9b9b',
  600: '#727272',
  700: '#5f5f5f',
  800: '#404040',
  900: '#1f1f1f',
}

const NAVYSCALE = {
  50: '#e6eaf1',
  600: '#1c4f8b',
  900: '#002b5c',
}

const GOLDSCALE = {
  700: '#f9a01b',
}

const EGGSHELL = '#fafafa'

export const adminMuiTheme = createTheme({
  palette: {
    primary: {
      main: NAVYSCALE[900],
    },
    secondary: {
      main: GOLDSCALE[700],
    },
    text: {
      primary: GREYSCALE[800],
      secondary: GREYSCALE[600],
    },
    background: {
      paper: EGGSHELL,
    },
    grey: {
      50: EGGSHELL,
      100: GREYSCALE[100],
    },
  },
  typography: {
    body2: {
      color: GREYSCALE[600],
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
          color: NAVYSCALE[900],
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: GREYSCALE[800],
          '&.Mui-selected': {
            backgroundColor: NAVYSCALE[600],
            color: GREYSCALE[100],
          },
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
