import { Box } from '@mui/material'

import { Dashboard } from 'features/components'

export function DashboardPage() {
  return (
    <Box>
      <Box sx={{ color: 'primary.main', px: 2 }} component="h3">
        DashboardPage
      </Box>
      <Dashboard />
    </Box>
  )
}
