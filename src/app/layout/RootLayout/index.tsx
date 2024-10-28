import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header } from 'features/components'

export function RootLayout() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Header />
      <Box sx={{ height: 'calc(100vh - 64px)' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
