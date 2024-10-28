import { useState } from 'react'

import { Box, IconButton, Tooltip } from '@mui/material'

import { Icon, OutlineIconName } from 'shared/icons'

import styles from './styles'

type MenuItem = {
  label: string
  value: string
  icon: OutlineIconName
}

export function SideNav() {
  const [state, setState] = useState('chat')

  const menuItems: MenuItem[] = [
    {
      label: 'Chat',
      value: 'chat',
      icon: 'Message',
    },
    {
      label: 'Documents',
      value: 'documents',
      icon: 'DocumentText',
    },
    {
      label: 'Record',
      value: 'microphone',
      icon: 'Microphone',
    },
  ]

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.menu}>
        {menuItems.map(({ icon, label, value }) => (
          <Tooltip title={label} placement="right">
            <IconButton
              sx={{
                ...styles.menuBtn,
                bgcolor: state === value ? 'custom.activeMenu' : 'transparent',
              }}
              onClick={() => {
                // eslint-disable-next-line no-console
                setState(value)
              }}
            >
              <Icon
                type="outline"
                name={icon}
                color="primary.main"
                fontSize="small"
              />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
}
