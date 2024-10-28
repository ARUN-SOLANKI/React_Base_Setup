import { useCallback, useMemo } from 'react'

import {
  Box,
  Button,
  Snackbar,
  Typography,
  SnackbarProps as MuiSnackbarProps,
} from '@mui/material'

import { Icon, IconProps } from 'shared/icons'
import { useSharedTranslation } from 'shared/locale'
import { CustomStyles, getStyles } from 'shared/styles'

import defaultStyles, {
  SnackBarColorClassName,
  StylesClassNames,
  textColor,
  Wrapper,
} from './styles'

type SnackBarVariant = 'toast' | 'notification'

export type SnackBarColor =
  | 'Primary'
  | 'Secondary'
  | 'Info'
  | 'Error'
  | 'Success'
  | 'Warning'

export type SnackBarProps = {
  variant?: SnackBarVariant
  title?: string
  description?: string
  color?: SnackBarColor
  icon?: IconProps
  hideClose?: boolean
  onClose: () => void
  duration?: number
  open?: boolean
  csx?: CustomStyles<StylesClassNames>
  onSubmit?: () => void
  onCancel?: () => void
  onSubmitLabel?: string
  onCancelLabel?: string
} & Pick<MuiSnackbarProps, 'anchorOrigin'>

export function SnackBar({
  variant = 'toast',
  title,
  description,
  anchorOrigin,
  color = 'Primary',
  icon,
  onClose,
  duration = 3000,
  open,
  csx,
  hideClose = false,
  onSubmit,
  onSubmitLabel,
  onCancel,
  onCancelLabel,
}: SnackBarProps) {
  const styles = getStyles(defaultStyles, csx)

  const { tShared } = useSharedTranslation('action')

  const colorClass = useMemo(
    () =>
      (
        ({
          Primary: 'primary',
          Secondary: 'secondary',
          Info: 'info',
          Error: 'error',
          Warning: 'warning',
          Success: 'success',
        }) as Record<
          SnackBarColor,
          Extract<StylesClassNames, SnackBarColorClassName>
        >
      )[color],
    [color]
  )

  const handleCancel = useCallback(() => {
    onCancel?.()
    onClose()
  }, [onCancel, onClose])

  const OnSubmitCta = useCallback(
    () =>
      onSubmit ? (
        <Button
          onClick={onSubmit}
          color={colorClass === 'primary' ? 'secondary' : colorClass}
          variant="contained"
        >
          {onSubmitLabel ?? tShared('ok')}
        </Button>
      ) : null,
    [colorClass, onSubmit, onSubmitLabel, tShared]
  )

  const OnCancelCta = useCallback(
    () =>
      onCancel ? (
        <Button
          {...styles('outlineBtn')}
          onClick={handleCancel}
          variant="outlined"
        >
          {onCancelLabel ?? tShared('cancel')}
        </Button>
      ) : null,
    [handleCancel, onCancel, onCancelLabel, styles, tShared]
  )

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      onClose={onClose}
      autoHideDuration={duration}
    >
      <Wrapper isToast={variant === 'toast'} {...styles(colorClass)}>
        {icon && <Icon color={textColor[colorClass]} {...icon} />}
        <Box
          {...styles('infoWrapper', {
            flexDirection: variant === 'toast' ? 'row' : 'column',
            alignItems: variant === 'toast' ? 'center' : 'start',
          })}
        >
          <Typography variant="body1.500" {...styles('title')}>
            {title}
          </Typography>
          {variant === 'toast' && <OnSubmitCta />}
          {variant === 'notification' && (
            <Typography variant="body2" {...styles('description')}>
              {description}
            </Typography>
          )}
          {variant === 'notification' && (onSubmit || onCancel) && (
            <Box {...styles('btnWrapper')}>
              <OnSubmitCta />
              <OnCancelCta />
            </Box>
          )}
        </Box>
        {!hideClose && (
          <Box onClick={onClose}>
            <Icon name="Cross" color={textColor[colorClass]} />
          </Box>
        )}
      </Wrapper>
    </Snackbar>
  )
}
