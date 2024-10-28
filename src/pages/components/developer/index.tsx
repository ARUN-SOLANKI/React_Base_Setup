import { useState } from 'react'

import { Box } from '@mui/material'

import { SnackBar } from 'shared/components'
import { isDev } from 'shared/environment'

import { Logo } from 'entities/components'

export function DeveloperPage() {
  const [open, setOpen] = useState(true)
  if (!isDev) return null

  return (
    <Box sx={{ p: 2 }}>
      <Logo classNames="blink" />

      <SnackBar
        open={open}
        variant="notification"
        onClose={() => setOpen(false)}
        title="Info"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="Info"
        onCancel={() => {}}
        onSubmit={() => {}}
        icon={{
          name: 'Cross',
        }}
      />

      <SnackBar
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        open={open}
        onClose={() => setOpen(false)}
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="Secondary"
        onCancel={() => {}}
        onSubmit={() => {}}
        icon={{
          name: 'TickCircle',
        }}
      />
    </Box>
  )
}
