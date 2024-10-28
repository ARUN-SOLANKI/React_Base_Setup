import { Box, Button } from '@mui/material'

export function HomePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box component="h3">HomePage</Box>
      <Button variant="contained" color="primary">
        Test Button
      </Button>
    </Box>
  )
}
