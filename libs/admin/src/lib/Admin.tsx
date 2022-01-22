import { ThemeProvider, CssBaseline, Grid, Toolbar } from '@mui/material'
import { useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import { adminFullTheme as theme } from '@msm/ui'

import AppBar from './components/AppBar/AppBar'
import Drawer from './components/Drawer/Drawer'
import { adminMuiTheme } from '@msm/ui'
import DistrictsList from './components/DistrictsList/DistrictsList'

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
        <main style={{ padding: theme.spacing(3), height: '100vh' }}>
          <Toolbar />
          <Routes>
            <Route path="/districts" element={<DistrictsList />} />
          </Routes>
        </main>
      </Grid>
    </ThemeProvider>
  )
}
