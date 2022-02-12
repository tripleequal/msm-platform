import { ThemeProvider, CssBaseline, Grid, Toolbar } from '@mui/material'
import { useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import { adminFullTheme as theme } from '@msm/ui'

import AppBar from './shared/AppBar/AppBar'
import Drawer from './shared/Drawer/Drawer'
import { adminMuiTheme } from '@msm/ui'
import DistrictTable from './district/DistrictTable'

export function Admin() {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <ThemeProvider theme={adminMuiTheme}>
      <CssBaseline />
      <Grid container>
        <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} />
        <Drawer variant="permanent" open={open} toggleDrawer={toggleDrawer} />
        <main
          style={{
            padding: theme.spacing(3),
            height: '100vh',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/districts" element={<DistrictTable />} />
          </Routes>
        </main>
      </Grid>
    </ThemeProvider>
  )
}
