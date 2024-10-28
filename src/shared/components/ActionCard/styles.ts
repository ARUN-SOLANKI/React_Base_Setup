import { StylesClasses, createStyles } from 'shared/styles'

const styles = createStyles({
  wrapper: {
    maxWidth: 345,
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
