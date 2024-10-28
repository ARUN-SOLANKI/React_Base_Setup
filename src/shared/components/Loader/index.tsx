import { Box, CircularProgress, CircularProgressProps } from '@mui/material'

import { CustomStyles, getStyles } from 'shared/styles'

import defaultStyles, { StylesClassNames } from './styles'

export type LoaderProps = {
  loading: boolean
  children?: React.ReactNode
  csx?: CustomStyles<StylesClassNames>
  fullView?: boolean
} & Omit<CircularProgressProps, 'sx'>

export function Loader({
  loading,
  children,
  csx,
  fullView = false,
  ...circularProgressProps
}: LoaderProps) {
  const styles = getStyles(defaultStyles, csx)

  if (loading)
    return (
      <Box
        {...styles('loaderWrapper', {
          height: fullView ? '99vh' : 'auto',
        })}
      >
        <Box {...styles('loaderBg')} />
        <CircularProgress {...styles('loader')} {...circularProgressProps} />
        <Box {...styles('wrapper')}>{children}</Box>
      </Box>
    )

  return <Box {...styles('wrapper')}>{children}</Box>
}
