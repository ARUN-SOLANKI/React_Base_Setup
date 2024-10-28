import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <Box>
      <Box>Auth Layout</Box>
      <Outlet />
    </Box>
  )
}
