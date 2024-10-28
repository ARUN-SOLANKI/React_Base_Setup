import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { SideNav } from 'features/components'

export function DashboardLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
      }}
    >
      <SideNav />

      <Box sx={{ width: '100%', overflow: 'scroll' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
