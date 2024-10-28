import { createStyles } from 'shared/styles'

const styles = createStyles({
  paper: {
    position: 'relative',
    width: '80%',
    overflowY: 'auto',
    px: 3,
    pt: 0,
    pb: 3,
  },
  header: {
    zIndex: 1,
    bgcolor: 'background.paper',
    position: 'sticky',
    top: 0,
    pt: 3,
    mb: '24px',
  },
  heading: {
    fontSize: '16px',
    fontWeight: '600',
    mb: '12px',
  },
  caption: {
    fontSize: '14px',
    color: 'text.secondary',
  },
  closeIcon: {
    position: 'absolute',
    top: 24,
    right: 0,
  },
})

export type StylesClassNames = keyof typeof styles

export default styles
