import { StylesClasses, createStyles } from 'shared/styles'

const styles = createStyles({
  wrapper: {
    p: 1,
    height: '100%',
  },
  menu: {
    py: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'center',
    bgcolor: 'background.paper',
    width: '64px',
    borderRadius: 2,
  },
  menuBtn: {
    height: '32px',
    width: '32px',
    p: 0.5,
    borderRadius: 2,
    display: 'block',
    fontWeight: 'normal',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
