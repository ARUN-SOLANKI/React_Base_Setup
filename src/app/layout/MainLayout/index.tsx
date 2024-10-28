import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { STYLES_SIZE_CONSTANTS } from 'shared/styles'

import { Header } from 'features/components'

export function MainLayout() {
  return (
    <>
      <Header />
      <Box
        sx={{ height: `calc(100vh - ${STYLES_SIZE_CONSTANTS.headerHeight}px)` }}
      >
        <Outlet />
      </Box>
    </>
  )
}
