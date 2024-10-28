import MenuIcon from '@mui/icons-material/Menu'
import { Divider } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'

import { useThemeMode } from 'shared/state'

import { Logo } from 'entities/components'

import styles from './styles'

export function Header() {
  const { toggleTheme } = useThemeMode()

  const handleOpenNavMenu = () => {}

  const handleOpenUserMenu = () => {
    toggleTheme()
  }

  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="xl">
        <Toolbar sx={styles.toolbar} disableGutters>
          <Logo withText />
          <Divider sx={styles.divider} orientation="vertical" />

          <Box sx={styles.menuIcon}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={styles.menu}>
            <Button sx={styles.menuBtn}>Free</Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={styles.avatar}> A </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
