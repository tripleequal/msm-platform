import { createTheme } from '@mui/material'

const SERIF = 'Garamond, serif'
const SANS_SERIF = 'Helvetica, sans-serif'

export const adminMuiTheme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
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

console.log('theme', adminMuiTheme)
