import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import styled from 'styled-components'
import { Badge, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { noop } from '@msm/core/utils'
import { adminFullTheme as theme } from '@msm/ui'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
  toggleDrawer?: () => void
}

export default function AppBar({
  open,
  toggleDrawer = noop,
  ...props
}: AppBarProps) {
  return (
    <StyledAppBar open={open} {...props}>
      <Toolbar
        style={{
          paddingRight: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          style={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          style={{ flexGrow: 1 }}
        >
          Admin
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(MuiAppBar).withConfig<AppBarProps>({
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>`
  z-index: ${theme.zIndex.drawer + 1};
  transition: ${theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })};
  ${({ open }) =>
    open &&
    `
    margin-left ${theme.drawerWidth};
    width: calc(100% - ${theme.drawerWidth});
    transition: ${theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })}
  `}
`
