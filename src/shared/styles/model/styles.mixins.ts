import { inputBaseClasses, SxProps } from '@mui/material'

import { ForceAny } from 'shared/typescript'

export const commonStyles = {
  defaultBorder: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border.main',
  },
  activeInput: {
    [`& .${inputBaseClasses.root}`]: {
      bgcolor: 'state.active',
      '&:hover': {
        bgcolor: 'state.active',
      },
      '& fieldset': {
        borderColor: 'transparent !important',
      },
    },
  },
  flexCol(gap: number) {
    return { display: 'flex', flexDirection: 'column', gap }
  },
} satisfies Record<string, ((...args: ForceAny) => SxProps) | SxProps>
