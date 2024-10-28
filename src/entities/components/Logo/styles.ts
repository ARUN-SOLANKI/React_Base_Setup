import { StylesClasses, createStyles } from 'shared/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {},
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
