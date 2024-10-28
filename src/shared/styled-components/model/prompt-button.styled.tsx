import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface PromptProps {
  active?: boolean
}

export const PromptBtn = styled(
  (props: ButtonProps) => <Button variant="outlined" {...props} />,
  { shouldForwardProp: (prop) => prop !== 'active' }
)<PromptProps>(({ active = false, theme }) => ({
  padding: '8px 16px',
  borderRadius: '8px',
  color: theme.palette.text.secondary,

  ...(theme.typography.caption1?.[500] as CSSPropertyRule),
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.border.main,

  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.inverted.text,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
}))
