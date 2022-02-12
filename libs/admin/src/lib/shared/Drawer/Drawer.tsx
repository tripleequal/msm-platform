import styled from 'styled-components'
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'
import { adminFullTheme as theme } from '@msm/ui'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import BusinessIcon from '@mui/icons-material/Business'
import { noop } from '@msm/core/utils'
import { NavLink, useMatch } from 'react-router-dom'
import { ReactNode } from 'react'

interface DrawerProps extends MuiDrawerProps {
  toggleDrawer?: () => void
}

export default function Drawer({ toggleDrawer = noop, ...props }: DrawerProps) {
  return (
    <StyledDrawer {...props}>
      <Toolbar
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingLeft: theme.spacing(),
          paddingRight: theme.spacing(),
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <div>
          <NavItem to="/districts">
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Districts" />
          </NavItem>
        </div>
      </List>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(MuiDrawer).withConfig<DrawerProps>({
  shouldForwardProp: (prop) => prop !== 'open',
})`
  & .MuiDrawer-paper {
    position: relative;
    white-space: nowrap;
    width: ${theme.drawerWidth};
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};
    box-sizing: border-box;
    ${({ open }) =>
      !open &&
      `
      overflow-x: hidden;
      transition: ${theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
      width: ${theme.spacing(7)};
      ${theme.breakpoints.up('sm')} {
        width: ${theme.spacing(9)}
      }
    `}
  }
`

interface NavItemProps {
  to: string
  children: ReactNode
}
function NavItem({ to, children }: NavItemProps) {
  const match = useMatch(to)
  return (
    <ListItem
      component={NavLink}
      to={to}
      className={match ? 'Mui-selected' : ''}
      style={{ color: theme.palette.text.primary }}
    >
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Districts" />
    </ListItem>
  )
}
