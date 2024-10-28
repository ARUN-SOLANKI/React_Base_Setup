import { StylesClasses, createStyles } from 'shared/styles'

const styles = createStyles({
  loaderWrapper: {
    position: 'relative',
  },
  loaderBg: {
    position: 'absolute',
    bgcolor: 'common.white',
    opacity: 0.7,
    inset: 0,
    zIndex: 20,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 30,
  },
  wrapper: {
    zIndex: 10,
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
