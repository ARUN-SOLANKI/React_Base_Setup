import { StylesClasses, createStyles } from 'shared/styles'

const styles = createStyles({
  toolbar: {
    minHeight: '56px !important',
    height: '56px !important',
  },
  logo: {
    color: 'inherit',
    textDecoration: 'none',
  },
  divider: {
    mr: 2,
    ml: 6,
    height: '50%',
    borderColor: 'border.main',
    width: '2px',
  },
  menu: { flexGrow: 1, display: 'flex' },
  menuBtn: {
    height: '32px',
    borderRadius: 2,
    p: 0,
    bgcolor: 'background.paper',
    display: 'block',
    fontWeight: 'normal',
  },
  menuIcon: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  avatar: { height: '32px', width: '32px', bgcolor: 'blue.500' },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
