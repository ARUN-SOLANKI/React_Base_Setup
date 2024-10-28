import { useMemo } from 'react'

import { Box } from '@mui/material'

import { useThemeMode } from 'shared/state'
import { CustomStyles, getStyles } from 'shared/styles'

import { logoMap } from './assets'
import defaultStyles, { StylesClassNames } from './styles'

type LogoProps = {
  withText?: boolean
  mono?: boolean
  csx?: CustomStyles<StylesClassNames>
  size?: 'small' | 'medium' | 'large'
  classNames?: string
}

export function Logo({
  mono,
  withText,
  csx,
  size = 'small',
  classNames = '',
}: LogoProps) {
  const styles = getStyles(defaultStyles, csx)

  const { mode } = useThemeMode()

  const logoSrc = useMemo(() => {
    if (mono) {
      if (withText) {
        return mode === 'dark' ? 'monoLightTextLogo' : 'monoDarkTextLogo'
      }
      return mode === 'dark' ? 'monoLightLogo' : 'monoDarkLogo'
    }
    if (withText) {
      return mode === 'dark' ? 'lightTextLogo' : 'darkTextLogo'
    }
    return 'logo'
  }, [mode, mono, withText])

  return (
    <Box {...styles('wrapper')}>
      <Box
        className={classNames}
        height={{ small: 32, medium: 64, large: 128 }[size]}
        {...styles('logo')}
        component="img"
        src={logoMap[logoSrc]}
      />
    </Box>
  )
}
